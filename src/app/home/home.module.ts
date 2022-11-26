import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { WeatherReportTodayComponent } from './components/weather-report-today/weather-report-today.component';
import { WeatherReportWeeklyComponent } from './components/weather-report-weekly/weather-report-weekly.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    WeatherReportTodayComponent,
    WeatherReportWeeklyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
