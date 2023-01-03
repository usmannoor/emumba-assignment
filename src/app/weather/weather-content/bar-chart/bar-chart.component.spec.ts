import { BarChartComponent } from './bar-chart.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../../../services/weather.service';
import { SharedService } from '../../../shared/shared.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartComponent],
      providers: [
        WeatherService,
        SharedService,
        DatePipe,
        HttpClient,
        HttpHandler
      ],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
