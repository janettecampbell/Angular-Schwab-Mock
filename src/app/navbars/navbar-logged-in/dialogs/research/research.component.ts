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
  selector: 'app-research',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {
  readonly dialog = inject(MatDialog)

  column1 = [
    {
      main: "Research",
      title: "U.S. Markets",
      route: "/app/research/#/markets"
    },
    {
      main: "Research",
      title: "International Markets",
      route: "/research/Client/Markets/International/Overview"
    },
  ]

  column2 = [
    {
      main: "Research",
      title: "Research Tools",
      route: "/app/research/#/tools/stocks"
    },
    {
      main: "Research",
      title: "Stocks",
      route: "/app/research/#/tools/stocks"
    },
    {
      main: "Research",
      title: "ETFs",
      route: "/app/research/#/tools/etfs"
    },
    {
      main: "Research",
      title: "Mutual Funds",
      route: "/app/research/#/tools/mutualfunds"
    },
    {
      main: "Research",
      title: "Options",
      route: "/app/research/#/tools/options"
    },
    {
      main: "Research",
      title: "Bonds, CDs & Fixed Income",
      route: "/Areas/Trade/FixedIncomeSearch/FISearch.aspx/BondAgreement?IsFiHubOverview=true"
    },
    {
      main: "Research",
      title: "Money Market Funds",
      route: "/secured/money-market-funds"
    },
    {
      main: "Research",
      title: "Calendar",
      route: "/app/research/#/tools/calendar"
    },
  ]

  column3 = [
    {
      main: "Research",
      title: "Watchlist",
      route: "/app/trade/watchlist"
    },
  ]

  closeDialog() {
    this.dialog.closeAll();
  }
}
