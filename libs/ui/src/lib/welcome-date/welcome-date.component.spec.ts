import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDateComponent } from './welcome-date.component';

describe('WelcomeComponent', () => {
  let component: WelcomeDateComponent;
  let fixture: ComponentFixture<WelcomeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome', () => {
    const fixture = TestBed.createComponent(WelcomeDateComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Welcome');
  });
});
