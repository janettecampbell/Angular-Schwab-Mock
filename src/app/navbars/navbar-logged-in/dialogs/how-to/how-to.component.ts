import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-how-to',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './how-to.component.html',
  styleUrl: './how-to.component.scss'
})
export class HowToComponent {
  readonly dialog = inject(MatDialog)

  column1 = [
    {
      main: 'How To',
      title: 'How To',
      route: '/secured/how-to-center',
    },
  ]

  closeDialog() {
    this.dialog.closeAll();
  }
}
