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
  selector: 'app-accounts',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent {
  readonly dialog = inject(MatDialog);

  column1 = [
    {
      main: 'Accounts',
      title: 'Summary',
      route: '/clientapps/accounts/summary',
    },
    { main: 'Accounts', title: 'Balances', route: '/app/accounts/balances' },
    {
      main: 'Accounts',
      title: 'Balance Letter',
      route: '/Apps/accounts/balanceletters/',
    },
    { main: 'Accounts', title: 'Positions', route: '/app/accounts/positions' },
    {
      main: 'Accounts',
      title: 'Realized Gain / Loss',
      route: '/app/accounts/rgl',
    },
    {
      main: 'Accounts',
      title: 'Investment Income',
      route: '/app/accounts/income',
    },
  ];

  column2 = [
    {
      main: 'Accounts',
      title: 'Portfolio Performance',
      route: '/app/accounts/porfoliohealth',
    },
    {
      main: 'Accounts',
      title: 'Schwab Portfolio Checkup',
      route: '/Accounts/PortfolioHealth/PortfolioHealth',
    },
    {
      main: 'Accounts',
      title: 'Securities Lending',
      route: '/Apps/Service/slfp',
    },
    {
      main: 'Accounts',
      title: 'Corporate Actions',
      route: '/Accounts/EReorg/eReOrgActiveAccountOffers',
    },
  ];

  column3 = [
    { main: 'Accounts', title: 'History', route: '/app/accounts/history' },
    {
      main: 'Accounts',
      title: 'Statement & Tax Forms',
      route: '/app/accounts/statements',
    },
    {
      main: 'Accounts',
      title: 'Open An Account',
      route: '/secured/client-account/open-an-account',
    },
    {
      main: 'Accounts',
      title: 'Relationship Summary',
      route: '/secured/transparency',
    },
  ];

  closeDialog() {
    this.dialog.closeAll();
  }
}
