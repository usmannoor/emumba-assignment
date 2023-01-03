import { CurrentForecastComponent } from './current-forecast.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../../../../services/weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CurrentForecastComponent', () => {
  let component: CurrentForecastComponent;
  let fixture: ComponentFixture<CurrentForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentForecastComponent],
      providers: [
        WeatherService,
        HttpClient,
        HttpHandler
      ],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
