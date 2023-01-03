import { Component, OnInit } from '@angular/core';
import { WeatherSearchLatLongResults } from '../interfaces/weather.interface';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  searchResult: WeatherSearchLatLongResults;
  loaderSubscription: Subscription;
  isLoading = false;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscribeToLoader();
  }

  onWeatherSelected(value: WeatherSearchLatLongResults) {
    this.searchResult = value;
  }

  private subscribeToLoader() {
    this.loaderSubscription = this.loaderService.loader
      .subscribe(value => {
        this.isLoading = value;
      });
  }
}

