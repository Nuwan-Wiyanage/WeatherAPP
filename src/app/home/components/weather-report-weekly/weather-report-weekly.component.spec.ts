import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportWeeklyComponent } from './weather-report-weekly.component';

describe('WeatherReportWeeklyComponent', () => {
  let component: WeatherReportWeeklyComponent;
  let fixture: ComponentFixture<WeatherReportWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherReportWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
