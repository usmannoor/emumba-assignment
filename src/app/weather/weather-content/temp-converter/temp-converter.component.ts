import { Component, Input } from '@angular/core';
import { GridObjectType } from '../../../shared/shared.constants';
import { WeatherSearchLatLongResults } from '../../../interfaces/weather.interface';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent {

  @Input() type: GridObjectType;
  @Input() searchResult: WeatherSearchLatLongResults;

  celsiusValue = null;
  fahrenheitValue = null;
  isFahrenheit = false;

  constructor() {}

  calculateTemperature(event, isFahrenheit = true): void {
    const value = event && event.target && event.target.value ? parseInt(event.target.value, 10)  : null;
    this.isFahrenheit = isFahrenheit;
    if(!isNaN(value) && !isFahrenheit) {
      this.fahrenheitValue = value * 9 / 5 + 32;
    }

    if(!isNaN(value) && isFahrenheit) {
      this.celsiusValue = (value -32) * 5 / 9;
    }

    this.fahrenheitValue = !value ? '' : this.fahrenheitValue;
    this.celsiusValue = !value ? '' : this.celsiusValue;
  }

}
