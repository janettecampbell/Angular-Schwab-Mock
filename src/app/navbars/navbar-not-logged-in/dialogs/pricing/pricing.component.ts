import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  readonly dialog = inject(MatDialog);

  closeDialog () {
    this.dialog.closeAll()
  }
}
