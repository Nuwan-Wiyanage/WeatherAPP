import { Component, Input, OnInit } from '@angular/core';
import { Daily, OpenWeatherApiResponse } from 'src/app/core/models/openweather-api.model';

@Component({
  selector: 'app-weather-report-weekly',
  templateUrl: './weather-report-weekly.component.html',
  styleUrls: ['./weather-report-weekly.component.scss']
})
export class WeatherReportWeeklyComponent implements OnInit {
  @Input() data: OpenWeatherApiResponse | any;
  dailyWeather: Daily[] | any;

  constructor() { }

  ngOnInit(): void {
    this.dailyWeather = this.data ? this.data.daily : [];
  }

}
