import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss'
})
export class WhyComponent {
  readonly dialog = inject(MatDialog);

  closeDialog () {
    this.dialog.closeAll()
  }
}
