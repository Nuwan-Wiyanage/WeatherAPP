import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomDatePipe } from 'src/app/core/pipes/custom-date.pipe';
import { HumidityRangePipe } from 'src/app/core/pipes/humidity-range.pipe';
import { UvIndexPipe } from 'src/app/core/pipes/uv-index.pipe';

import { WeatherReportTodayComponent } from './weather-report-today.component';

describe('WeatherReportTodayComponent', () => {
  let component: WeatherReportTodayComponent;
  let fixture: ComponentFixture<WeatherReportTodayComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportTodayComponent, 
        CustomDatePipe,
        HumidityRangePipe,
        UvIndexPipe ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

    fixture = TestBed.createComponent(WeatherReportTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
