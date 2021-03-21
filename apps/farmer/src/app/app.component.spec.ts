import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@farmer/ui';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientModule,
        UiModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a h1 element', () => {
    const element = fixture.debugElement.query(By.css('h1'));
    expect(element).not.toBeNull();
    expect(element.nativeElement.textContent.trim()).toBe('Farmer Search Component');
  });

  it('should has a farmer-search-card element', () => {
    const element = fixture.debugElement.query(By.css('farmer-search-card'));
    expect(element).not.toBeNull();
  });
});
