import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ButtonComponent } from '../../../../features/button/button.component';

@Component({
  selector: 'app-accounts-and-products',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    ButtonComponent,
  ],
  templateUrl: './accounts-and-products.component.html',
  styleUrl: './accounts-and-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsAndProductsComponent {
  readonly dialog = inject(MatDialog);

  closeDialog () {
    this.dialog.closeAll()
  }
}
