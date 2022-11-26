import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

//This service is used to get the weather detials according to particular latitude and longitude
@Injectable({ providedIn: 'root' })
export class WeatherService {
  private currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: any): Observable<any> {
    const path = `${this.currentWeatherApiUrl}lat=${city.lat}&lon=${city.lon}&exclude=minutely,alerts&units=metric&appid=${environment.openWeatherApiKey}`;
    return this.http.get<any>(path).pipe(
      map(data => ({
        ...data,
        name: city.name,
        image: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png` //icon url for the weather 
      })),
      delay(500)
    );
  }
}
