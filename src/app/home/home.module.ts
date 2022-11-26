import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { WeatherReportTodayComponent } from './components/weather-report-today/weather-report-today.component';
import { WeatherReportWeeklyComponent } from './components/weather-report-weekly/weather-report-weekly.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomDatePipe } from '../core/pipes/custom-date.pipe';
import { HumidityRangePipe } from '../core/pipes/humidity-range.pipe';
import { UvIndexPipe } from '../core/pipes/uv-index.pipe';
import { LoaderComponent } from '../core/components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LoaderComponent,
    CustomDatePipe,
    HumidityRangePipe,
    UvIndexPipe,
    HeaderComponent,
    HomeComponent,
    WeatherReportTodayComponent,
    WeatherReportWeeklyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ]
})
export class HomeModule { }
