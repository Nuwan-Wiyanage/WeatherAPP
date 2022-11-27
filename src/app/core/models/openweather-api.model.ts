import { Current } from "./current.model";
import { Daily } from "./daily.model";

export interface OpenWeatherApiResponse {
  name: string;
  image: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Current[];
  daily: Daily[];
}
