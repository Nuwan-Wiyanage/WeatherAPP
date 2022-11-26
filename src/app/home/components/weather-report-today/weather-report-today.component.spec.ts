import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportTodayComponent } from './weather-report-today.component';

describe('WeatherReportTodayComponent', () => {
  let component: WeatherReportTodayComponent;
  let fixture: ComponentFixture<WeatherReportTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherReportTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
