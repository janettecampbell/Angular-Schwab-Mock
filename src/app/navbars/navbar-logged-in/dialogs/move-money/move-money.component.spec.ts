import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveMoneyComponent } from './move-money.component';

describe('MoveMoneyComponent', () => {
  let component: MoveMoneyComponent;
  let fixture: ComponentFixture<MoveMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
