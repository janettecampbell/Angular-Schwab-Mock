import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNotLoggedInComponent } from './footer-not-logged-in.component';

describe('FooterNotLoggedInComponent', () => {
  let component: FooterNotLoggedInComponent;
  let fixture: ComponentFixture<FooterNotLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNotLoggedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNotLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
