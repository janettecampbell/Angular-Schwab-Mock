import {
  Component,
  ChangeDetectionStrategy,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { AccountsAndProductsComponent } from './dialogs/accounts-and-products/accounts-and-products.component';
import { ButtonComponent } from '../../features/button/button.component';
import { AdviceComponent } from './dialogs/advice/advice.component';
import { PricingComponent } from './dialogs/pricing/pricing.component';
import { WhyComponent } from './dialogs/why/why.component';
import { LearnComponent } from './dialogs/learn/learn.component';

@Component({
  selector: 'app-navbar-not-logged-in',
  standalone: true,
  imports: [MatButtonModule, ButtonComponent, AccountsAndProductsComponent],
  templateUrl: './navbar-not-logged-in.component.html',
  styleUrl: './navbar-not-logged-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarNotLoggedInComponent {
  readonly dialog = inject(MatDialog);

  openDialogAccount(event: MouseEvent): void {
    this.dialog.closeAll()
    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log('liRect', liRect);
    console.log('liElement', liElement);

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(AccountsAndProductsComponent, dialogConfig);
  }

  openDialogAdvice(event: MouseEvent): void {
    this.dialog.closeAll()
    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log('liRect', liRect);
    console.log('liElement', liElement);

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left - 388}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(AdviceComponent, dialogConfig);
  }

  openDialogPrice(event: MouseEvent): void {
    this.dialog.closeAll()
    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log('liRect', liRect);
    console.log('liElement', liElement);

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left - 400}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(PricingComponent, dialogConfig);
  }

  openDialogWhy(event: MouseEvent): void {
    this.dialog.closeAll()
    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log('liRect', liRect);
    console.log('liElement', liElement);

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left - 400}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(WhyComponent, dialogConfig);
  }

  openDialogLearn(event: MouseEvent): void {
    this.dialog.closeAll()

    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log('liRect', liRect);
    console.log('liElement', liElement);

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left - 500}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';
    dialogConfig.hasBackdrop = false;

    this.dialog.open(LearnComponent, dialogConfig);
  }

}
