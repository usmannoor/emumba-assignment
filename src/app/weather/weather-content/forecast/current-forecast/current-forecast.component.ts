import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CurrentForecast } from '../../../../interfaces/weather.interface';
import { WeatherService } from '../../../../services/weather.service';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss'],
  providers: [DatePipe],
})
export class CurrentForecastComponent {

  @Input() currentWeather: CurrentForecast;

  showMore = false;

  constructor(
    private weatherService: WeatherService
  ) {}

  onShowMore(event) {
    event.stopPropagation();
    this.showMore = this.showMore !== true;
  }

  onCardClick() {
    this.weatherService.clickForecastCard(true);
  }
}
