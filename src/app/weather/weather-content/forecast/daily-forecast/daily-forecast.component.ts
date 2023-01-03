import { Component, Input } from '@angular/core';
import { DailyForecast } from '../../../../interfaces/weather.interface';
import { WeatherService } from '../../../../services/weather.service';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss'],
})
export class DailyForecastComponent {

  @Input() dailyWeather: DailyForecast[];

  constructor(
    private weatherService: WeatherService
  ) {}

  onCardClick() {
    this.weatherService.clickForecastCard(false);
  }
}
