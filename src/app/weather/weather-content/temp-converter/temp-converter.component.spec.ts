import { TempConverterComponent } from './temp-converter.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';


describe('TempConverterComponent', () => {
  let component: TempConverterComponent;
  let fixture: ComponentFixture<TempConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TempConverterComponent],
      providers: [],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
