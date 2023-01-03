import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherSearchLatLongResults, WeatherSearchResult } from '../../interfaces/weather.interface';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() weatherSelect = new EventEmitter<WeatherSearchLatLongResults>();

  searchForm: FormGroup;
  searchSubscription: Subscription;
  results: WeatherSearchResult[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private loaderService: LoaderService,
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.subscribeSearchInput();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  initializeForm(): void {
    this.searchForm = this.formBuilder.group({
      searchBy: ['name', Validators.compose([Validators.required])],
      search: ['', Validators.compose([Validators.required])]
    });
  }

  private subscribeSearchInput(): void {
    this.searchSubscription = this.searchForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(
      changes => {
        if (!this.searchForm.valid) {
          this.results = [];
          return;
        }
        // call open weather API
        this.getSearchResults();
      });
  }

  async getSearchResults() {
    try {
      this.loaderService.toggleLoader(true);
      const weatherResult = await this.weatherService.fetchSearchResults(this.searchForm.value);
      this.results = !Array.isArray(weatherResult) ? [weatherResult] : weatherResult;
      this.results.forEach(res => {
        res.state = res.state || '';
        res.displayValue = `${res.name} ${res.state} ${res.country} (${res.lat} ${res.lon})`;
      });
    } catch ( e ) {
    } finally {
      this.loaderService.toggleLoader(false);
    }
  }

  onSearchByChange() {
    this.searchForm.get('search').setValue('');
    this.results = [];
  }

  async onResultSelect(value: WeatherSearchResult) {
    try {
      this.loaderService.toggleLoader(true);
      this.results = [];
      this.searchForm.get('search').setValue(value.displayValue);
      const weatherResult = await this.weatherService.fetchSearchLatLong(value);
      weatherResult.name = value.name;
      this.weatherSelect.emit(weatherResult)
    } catch ( e ) {
    } finally {
      this.loaderService.toggleLoader(false);
    }
  }
}
