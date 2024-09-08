import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {
  readonly dialog = inject(MatDialog);

  closeDialog () {
    this.dialog.closeAll()
  }
}
