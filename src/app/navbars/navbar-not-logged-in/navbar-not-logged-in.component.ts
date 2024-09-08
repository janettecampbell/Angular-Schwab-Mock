import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogConfig,
} from '@angular/material/dialog';
import { AccountsAndProductsComponent } from './dialogs/accounts-and-products/accounts-and-products.component';
import { ButtonComponent } from '../../features/button/button.component';

@Component({
  selector: 'app-navbar-not-logged-in',
  standalone: true,
  imports: [MatButtonModule, ButtonComponent],
  templateUrl: './navbar-not-logged-in.component.html',
  styleUrl: './navbar-not-logged-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarNotLoggedInComponent {
  readonly dialog = inject(MatDialog);

  openDialogAccounts() {

    this.dialog.open(AccountsAndProductsComponent, {
      width: '1000px',
      maxWidth: 'none',
    });
  }
}
