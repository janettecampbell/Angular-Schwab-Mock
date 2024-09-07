import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNotLoggedInComponent } from './navbar-not-logged-in.component';

describe('NavbarNotLoggedInComponent', () => {
  let component: NavbarNotLoggedInComponent;
  let fixture: ComponentFixture<NavbarNotLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarNotLoggedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNotLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
