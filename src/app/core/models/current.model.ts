import { Rain } from "./rain.model";
import { Snow } from "./snow.model";
import { Weather } from "./weather.model";

export interface Current {
    dt: number;
    sunrise?: number;
    sunset?: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    snow?: Snow;
    pop?: number;
    rain?: Rain;
  }