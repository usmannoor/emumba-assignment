import { DailyForecastComponent } from './daily-forecast.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../../../../services/weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DailyForecastComponent', () => {
  let component: DailyForecastComponent;
  let fixture: ComponentFixture<DailyForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyForecastComponent],
      providers: [
        WeatherService,
        HttpClient,
        HttpHandler
      ],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
