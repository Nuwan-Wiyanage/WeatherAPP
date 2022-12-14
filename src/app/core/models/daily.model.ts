import { FeelsLike } from "./feels-like.model";
import { Temp } from "./temp.model";
import { Weather } from "./weather.model";

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    rain?: number;
    snow?: number;
    uvi: number;
  }