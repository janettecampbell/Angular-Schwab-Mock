import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoggedInComponent } from './footer-logged-in.component';

describe('FooterLoggedInComponent', () => {
  let component: FooterLoggedInComponent;
  let fixture: ComponentFixture<FooterLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLoggedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
