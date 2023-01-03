import { SearchComponent } from './search.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WeatherService } from '../../services/weather.service';
import { LoaderService } from '../../services/loader.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { mockOneCallResult, mockSearchResult } from './search.mock.spec';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let weatherService: WeatherService;
  let loaderService: LoaderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        FormBuilder,
        WeatherService,
        LoaderService,
        HttpClient,
        HttpHandler
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();
    weatherService = TestBed.get(WeatherService);
    loaderService = TestBed.get(LoaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    const {search, searchBy} = component.searchForm.controls;

    component.initializeForm();

    expect(search.value).toEqual('');
    expect(searchBy.value).toEqual('name');
  });

  it('should select value from option', () => {
    spyOn(component, 'onSearchByChange');
    const { search } = component.searchForm.controls;

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.form-select')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.onSearchByChange).toHaveBeenCalled();
    expect(search.valid).toBeFalse();
    expect(component.results.length).toHaveSize(0);
  });

  it('should fetch search results', async () => {
    spyOn(weatherService, 'fetchSearchResults').and.returnValue(Promise.resolve(mockSearchResult));
    spyOn(loaderService, 'toggleLoader');
    expect(component.results.length).toEqual(0);

    await component.getSearchResults();

    expect(weatherService.fetchSearchResults).toHaveBeenCalled();
    expect(component.results.length).toBeGreaterThan(0);
    expect(loaderService.toggleLoader).toHaveBeenCalledWith(true);
  });

  it('should fetch result on select', async () => {
    spyOn(weatherService, 'fetchSearchLatLong').and.returnValue(Promise.resolve(mockOneCallResult));
    spyOn(loaderService, 'toggleLoader');
    spyOn(component.weatherSelect, 'emit');

    await component.onResultSelect(mockSearchResult[0]);

    expect(weatherService.fetchSearchLatLong).toHaveBeenCalled();
    expect(component.weatherSelect.emit).toHaveBeenCalled();
    expect(loaderService.toggleLoader).toHaveBeenCalledWith(true);
  });
});
