import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have showDetails set to false`, waitForAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app: AppComponent = fixture.debugElement.componentInstance;
  //   expect(app.showDetails).toBeFalsy();
  // }));

  // it(`should have as title 'angular-demo-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-demo-app');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Welcome to the app!'
  //   );
  // });
});
