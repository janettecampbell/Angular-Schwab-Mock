import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAndProductsComponent } from './accounts-and-products.component';

describe('AccountsAndProductsComponent', () => {
  let component: AccountsAndProductsComponent;
  let fixture: ComponentFixture<AccountsAndProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsAndProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsAndProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
