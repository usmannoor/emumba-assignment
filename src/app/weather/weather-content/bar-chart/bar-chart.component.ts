import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GridObjectType } from '../../../shared/shared.constants';
import { WeatherSearchLatLongResults } from '../../../interfaces/weather.interface';
import { ChartConfiguration } from 'chart.js';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnDestroy {

  @Input() type: GridObjectType;
  @Input() searchResult: WeatherSearchLatLongResults;
  isCurrentForecastCard = false;

  forecastSubscription: Subscription;
  public barChartLegend = true;
  public barChartData: ChartConfiguration<'bar'>['data'];
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor(
    private weatherService: WeatherService,
    private sharedService: SharedService,
  ) {
  }

  ngOnInit() {
    this.initializeChart();
    this.subscribeToForecastCard();
  }

  ngOnDestroy(): void {
    if (this.forecastSubscription) {
      this.forecastSubscription.unsubscribe();
    }
  }

  private initializeChart() {
    this.barChartData = {
      labels: [ ],
      datasets: []
    }
  }

  private mapForecastDetails() {
    if (this.isCurrentForecastCard && this.searchResult && this.searchResult.current) {
      const notAllowed = ['sunrise', 'sunset', 'dt', 'weather', 'rain', 'visibility', 'uvi'];
      const filtered = this.sharedService.filterObject(this.searchResult.current, notAllowed);

      this.initializeChart();
      this.setBarChartData('Current Forecast', Object.keys(filtered), Object.values(filtered));
    } else if (!this.isCurrentForecastCard && this.searchResult && this.searchResult.daily && this.searchResult.daily.length) {
      const result = this.searchResult.daily.map((item, index) =>
        ({ temp: item.temp, date: this.sharedService.addDays(index + 1) }));
      const labels = result.map(item => item.date);
      const morningData = result.map(item => item.temp.morn);
      const dayData = result.map(item => item.temp.day);
      const eveData = result.map(item => item.temp.eve);
      const nightData = result.map(item => item.temp.night);

      this.initializeChart();
      this.setBarChartData('Morning', labels, morningData);
      this.setBarChartData('Day', labels, dayData);
      this.setBarChartData('Evening', labels, eveData);
      this.setBarChartData('Night', labels, nightData);
    }
  }

  private setBarChartData(label = '', labels: string[], data: number[]) {
    this.barChartData.labels = labels;
    this.barChartData.datasets.push({data, label});
  }

  private subscribeToForecastCard() {
    this.forecastSubscription = this.weatherService.currentForecast
      .subscribe(value => {
        this.isCurrentForecastCard = value;
        this.mapForecastDetails();
      });
  }
}
