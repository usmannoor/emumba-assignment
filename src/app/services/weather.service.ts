import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherSearch, WeatherSearchLatLongResults, WeatherSearchResult } from '../interfaces/weather.interface';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  currentForecast: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.currentForecast = new BehaviorSubject(false);
  }

  fetchSearchResults(searchFormValue: WeatherSearch): Promise<WeatherSearchResult[]> {
    const getParam = searchFormValue.searchBy === 'name' ? 'direct?q=' : 'zip?zip=';
    return this.http.get<WeatherSearchResult[]>(
      `${environment.baseURL}geo/1.0/${getParam}${searchFormValue.search}&limit=5&APPID=${environment.app_id}`)
      .toPromise();
  }

  fetchSearchLatLong(value: WeatherSearchResult): Promise<WeatherSearchLatLongResults> {
    const url = environment.baseURL.replace('http', 'https');
    return this.http.get<WeatherSearchLatLongResults>(
      `${url}data/2.5/onecall?appid=${environment.app_id_one_call}&lat=${value.lat}&lon=${value.lon}&units=imperial&exclude=minutely,hourly,alerts`)
      .toPromise();
  }

  clickForecastCard(isCurrentForecast: boolean) {
    this.currentForecast.next(isCurrentForecast);
  }
}
