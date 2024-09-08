import { Injectable, inject } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class NavbarNotLoggedInService {
  readonly dialog = inject(MatDialog);

  constructor() {}

  openDialog(event: MouseEvent, component: any): void {
    const dialogConfig = new MatDialogConfig();

    // Get the position of the li menu element
    const liElement = event.target as HTMLElement;
    const liRect = liElement.getBoundingClientRect();

    console.log("liRect", liRect)
    console.log("liElement", liElement)

    // Set the dialog under the li menu element
    dialogConfig.position = {
      top: `${liRect.bottom}px`,
      left: `${liRect.left}px`,
    };
    dialogConfig.width = '1000px';
    dialogConfig.maxWidth = 'none';

    this.dialog.open(component, dialogConfig);
  }
}
