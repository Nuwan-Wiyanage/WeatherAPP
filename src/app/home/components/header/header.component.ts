import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable, takeUntil, map } from 'rxjs';
import { staticContryDetails } from 'src/app/core/mock-data/countries-mock.data';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() newLocationEvent = new EventEmitter<string>();

  private unsubscribe$ = new Subject<void>();

  countriesList = staticContryDetails;

  countryControl: FormControl | any;
  cityControl: FormControl | any;
  cities$: Observable<any> | undefined;
  
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    //Perform actions when selecting an option from cities dropdown
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: any) => {
        this.loaderService.setLoaderStatus(true);
        this.newLocationEvent.emit(value);
      });

    //Bind the data to cities dropdown according to the selected option in country dropdown
    this.countryControl = new FormControl('');
    this.cities$ = this.countryControl.valueChanges.pipe(
      map((country: { cities: Observable<any>; }) => country.cities)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
