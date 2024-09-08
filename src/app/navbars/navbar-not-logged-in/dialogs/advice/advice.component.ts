import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [],
  templateUrl: './advice.component.html',
  styleUrl: './advice.component.scss'
})
export class AdviceComponent {
  readonly dialog = inject(MatDialog);

  closeDialog () {
    this.dialog.closeAll()
  }
}
