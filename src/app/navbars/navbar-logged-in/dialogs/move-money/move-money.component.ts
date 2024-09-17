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
  selector: 'app-move-money',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './move-money.component.html',
  styleUrl: './move-money.component.scss'
})
export class MoveMoneyComponent {
  readonly dialog = inject(MatDialog)

  column1 = [
    {
      main: "Move Money",
      title: "Transfers & Payments",
      route: "/app/accounts/transfers_and_payments_overview"
    },
    {
      main: "Move Money",
      title: "Recent Transfer Activity",
      route: "/app/accounts/transfer-activity"
    },
    {
      main: "Move Money",
      title: "Online Transfer",
      route: "/app/accounts/transfers"
    },
    {
      main: "Move Money",
      title: "External Accounts",
      route: "/app/accounts/externalaccounts"
    },
    {
      main: "Move Money",
      title: "Send Wire",
      route: "/app/accounts/wire-transfers"
    },
  ]

  column2 = [
    {
      main: "Move Money",
      title: "Pay Bills",
      route: "/Accounts/TransfersAndPayments/Paybills"
    },
    {
      main: "Move Money",
      title: "Request Check",
      route: "/app/accounts/check-disbursement/#/check-request"
    },
    {
      main: "Move Money",
      title: "Transfer Account",
      route: "/app/transferofaccounts/#/transferofaccounts/getting-started"
    },
    {
      main: "Move Money",
      title: "Routing Numbers & Direct Deposit",
      route: "/app/routing-numbers/#/routingnumbers"
    },
  ]

  closeDialog() {
    this.dialog.closeAll();
  }
}
