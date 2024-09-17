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
  selector: 'app-trade',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss',
})
export class TradeComponent {
  readonly dialog = inject(MatDialog);

  column1 = [
    {
      main: 'Trade',
      title: 'All-In-One Trade Ticket',
      route: '/app/trade/tom',
    },
    {
      main: 'Trade',
      title: 'Stocks & ETFs',
      route: '/app/trade/tom/trade?Strategy=S',
    },
    {
      main: 'Trade',
      title: 'Options',
      route: '/app/trade/tom/trade?Strategy=O',
    },
    {
      main: 'Trade',
      title: 'Mutual Funds',
      route: '/app/trade/tom/trade?Strategy=MF',
    },
    {
      main: 'Trade',
      title: 'Schwab Stock Slices™',
      route: '/app/trade/stockslices',
    },
    {
      main: 'Trade',
      title: 'Schwab Investing Themes™',
      route: '/app/trade/thematic',
    },
  ];

  column2 = [
    {
      main: 'Trade',
      title: 'Order Status',
      route: '/app/trade/orderstatus',
    },
    {
      main: 'Trade',
      title: 'Bonds',
      route: '/Areas/Trade/FixedIncomeSearch/FISearch.aspx/BondAgreement',
    },
    {
      main: 'Trade',
      title: 'CDs',
      route: '/Areas/Trade/FixedIncomeSearch/FISearch.aspx/BondAgreement',
    },
    {
      main: 'Trade',
      title: 'Futures',
      route: '/app/trade/futures',
    },
    {
      main: 'Trade',
      title: 'Forex',
      route: '/app/trade/forex',
    },
    {
      main: 'Trade',
      title: 'IPOs',
      route: 'trade/IPOs',
    },
  ];

  column3 = [
    {
      main: 'Trade',
      title: 'Trading Platforms',
      route: '/app/trade/tradingtools',
    },
    {
      main: 'Trade',
      title: 'Watchlist',
      route: '/app/trade/watchlist',
    },
  ];

  closeDialog() {
    this.dialog.closeAll();
  }
}
