import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { WeatherComponent } from './weather.component';
import { SearchComponent } from '../components/search/search.component';
import { MaterialModule } from '../core/material.module';
import { TempConverterComponent } from './weather-content/temp-converter/temp-converter.component';
import { BarChartComponent } from './weather-content/bar-chart/bar-chart.component';
import { ForecastComponent } from './weather-content/forecast/forecast.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';
import { WeatherMapComponent } from './weather-map/weather-map.component';
import { CurrentForecastComponent } from './weather-content/forecast/current-forecast/current-forecast.component';
import { DailyForecastComponent } from './weather-content/forecast/daily-forecast/daily-forecast.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderService } from '../services/loader.service';
import { NgChartsModule } from 'ng2-charts';
import { SharedService } from '../shared/shared.service';

@NgModule({
  declarations: [
    WeatherComponent,
    HeaderComponent,
    SearchComponent,
    TempConverterComponent,
    BarChartComponent,
    ForecastComponent,
    WeatherContentComponent,
    WeatherMapComponent,
    CurrentForecastComponent,
    DailyForecastComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    WeatherRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    SharedService,
    LoaderService,
    DatePipe
  ],
})
export class WeatherModule {}
