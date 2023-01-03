import { Component, Input } from '@angular/core';
import { GridObjectType } from '../../../shared/shared.constants';
import { WeatherSearchLatLongResults } from '../../../interfaces/weather.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {

  @Input() type: GridObjectType;
  @Input() searchResult: WeatherSearchLatLongResults;

  GridObjectType = GridObjectType;

  constructor() {}
}
