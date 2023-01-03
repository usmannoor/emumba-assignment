import { WeatherMapComponent } from './weather-map.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

describe('WeatherMapComponent', () => {
  let component: WeatherMapComponent;
  let fixture: ComponentFixture<WeatherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherMapComponent],
      providers: [],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
