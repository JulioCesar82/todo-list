import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [
    //     AppComponent
    //   ],
    // }).compileComponents();
  });

  it('renders without crashing', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
   
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
   
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('h1').textContent).toContain('Angular Todo App');
  });
});