import { TestBed } from '@angular/core/testing';

import { NavbarNotLoggedInService } from './navbar-not-logged-in.service';

describe('NavbarNotLoggedInService', () => {
  let service: NavbarNotLoggedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarNotLoggedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
