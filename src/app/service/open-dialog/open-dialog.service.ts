import { ElementRef, inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NavbarLoggedInComponent } from '../../navbars/navbar-logged-in/navbar-logged-in.component';

@Injectable({
  providedIn: 'root',
})
export class OpenDialogService {
  readonly dialog = inject(MatDialog);

  constructor() {}

  openDialog(
    event: MouseEvent,
    component: any,
    firstMenuItem: ElementRef
  ): void {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();

    // Set Dialog under menu
    dialogConfig.position = {
      top: '65px',
      left: `${firstMenuItem.nativeElement.offsetLeft-80}px`,
    };
    dialogConfig.hasBackdrop = false;
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';

    this.dialog.open(component, dialogConfig);
  }
}
