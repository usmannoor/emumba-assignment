import { GridObjectType } from '../shared/shared.constants';

export interface GridList {
  name: string;
  types: GridObjectType[];
}

export interface WeatherSearchResult {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state?: string;
  local_names?: object;
  zip?: string;
  displayValue?: string;
}

export interface WeatherSearchLatLongResults {
  current: CurrentForecast;
  daily: DailyForecast[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  name?: string;
}

export interface DailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: DailyFeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain?: number;
  sunrise: number;
  sunset: number;
  temp: DailyForecastTemp;
  uvi: number;
  weather: ForecastWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface DailyFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface DailyForecastTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface CurrentForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: ForecastWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface ForecastWeather {
  icon: string;
  description: string;
  id: number;
  main: string;
}

export interface WeatherSearch {
  search: string;
  searchBy: string;
}
