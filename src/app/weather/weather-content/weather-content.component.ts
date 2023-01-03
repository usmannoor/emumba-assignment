import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GridObjectType } from '../../shared/shared.constants';
import { GridList, WeatherSearchLatLongResults } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.scss']
})
export class WeatherContentComponent implements OnChanges {

  @Input() searchResult: WeatherSearchLatLongResults;

  isCurrentForecastCard = false;
  cloneSearchResult: WeatherSearchLatLongResults;
  GridObjectType = GridObjectType;
  mainCards: GridList[] = [
    {name: 'Forecast', types: [GridObjectType.forecast, GridObjectType.weeklyForecast]},
    {name: 'Conv-bar', types: [GridObjectType.temperatureConverter, GridObjectType.barChart]}
  ];

  constructor(
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['searchResult'] && changes['searchResult'].currentValue) {
      this.cloneSearchResult = changes['searchResult'].currentValue;
    }
  }

}
