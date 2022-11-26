import { Component, Input, OnInit } from '@angular/core';
import { OpenWeatherApiResponse } from 'src/app/core/models/openweather-api.model';

@Component({
  selector: 'app-weather-report-today',
  templateUrl: './weather-report-today.component.html',
  styleUrls: ['./weather-report-today.component.scss']
})
export class WeatherReportTodayComponent implements OnInit {
  @Input() data: OpenWeatherApiResponse | any;
  today: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
