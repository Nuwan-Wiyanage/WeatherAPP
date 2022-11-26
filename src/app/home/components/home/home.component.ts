import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiResponse } from 'src/app/core/models/openweather-api.model';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: OpenWeatherApiResponse | any;

  constructor(private weatherService: WeatherService, public loaderService: LoaderService, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
    //Default location is set to London when initially loading the application
    this.onLocationChanged({
      name: 'London',
      lon: 0.1276,
      lat: 51.5072
    });
  }

  onLocationChanged(location: any): void {
    this.weatherService.getWeatherForCity(location).subscribe({
      next: (data) => {
        this.loaderService.setLoaderStatus(false);
        if(!data){
          this.errorHandlerService.handleError("Data not retrived from OpenWeatherAPI")
        }else{
          this.data = data;
        }
        
      },
      error: (e) => {
        this.loaderService.setLoaderStatus(false);
        this.errorHandlerService.handleError(e.error.message);
      },
    });
  }
}
