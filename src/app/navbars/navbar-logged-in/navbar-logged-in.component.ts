import { Component, inject, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountsComponent } from './dialogs/accounts/accounts.component';
import { HowToComponent } from './dialogs/how-to/how-to.component';
import { LearnComponent } from './dialogs/learn/learn.component';
import { MoveMoneyComponent } from './dialogs/move-money/move-money.component';
import { ProductsComponent } from './dialogs/products/products.component';
import { ResearchComponent } from './dialogs/research/research.component';
import { TradeComponent } from './dialogs/trade/trade.component';
import { OpenDialogService } from '../../service/open-dialog/open-dialog.service';

@Component({
  selector: 'app-navbar-logged-in',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AccountsComponent,
    HowToComponent,
    LearnComponent,
    MoveMoneyComponent,
    ProductsComponent,
    ResearchComponent,
    TradeComponent,
  ],
  templateUrl: './navbar-logged-in.component.html',
  styleUrl: './navbar-logged-in.component.scss',
})
export class NavbarLoggedInComponent {
  router = inject(Router);
  location = inject(Location);
  openDialogService = inject(OpenDialogService);
  accountsComponent = AccountsComponent;
  howToComponent = HowToComponent;
  learnComponent = LearnComponent;
  moveMoneyComponent = MoveMoneyComponent;
  productsComponent = ProductsComponent;
  researchComponent = ResearchComponent;
  tradeComponent = TradeComponent;

  @ViewChild('firstMenuItem', { static: false }) firstMenuItem!: ElementRef;

  currentlyActive = '';
  currentLinks: any[] = [];

  mainMenu: any = [
    { title: 'Accounts', component: this.accountsComponent },
    { title: 'Trade', component: this.tradeComponent },
    { title: 'Research', component: this.researchComponent },
    { title: 'Move Money', component: this.moveMoneyComponent },
    { title: 'Products', component: this.productsComponent },
    { title: 'Learn', component: this.learnComponent },
    { title: 'How to', component: this.howToComponent },
  ];

  subMenu: any = [
    {
      main: 'Accounts',
      title: 'Summary',
      route: '/clientapps/accounts/summary',
    },
    { main: 'Accounts', title: 'Balances', route: '/app/accounts/balances' },
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
    {
      main: 'Accounts',
      title: 'Portfolio Performance',
      route: '/app/accounts/porfoliohealth',
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
    {
      main: "Research",
      title: "Watchlist",
      route: "/app/trade/watchlist"
    },
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
    {
      main: "Products",
      title: "Ways to Invest",
      route: "/secured/invest-with-us"
    },
    {
      main: "Products",
      title: "Account Types",
      route: "/secured/accounts"
    },
    {
      main: "Products",
      title: "Retirement & IRAs",
      route: "/secured/ira"
    },
    {
      main: "Products",
      title: "Banking & Borrowing",
      route: "/secured/bank"
    },
    {
      main: "Products",
      title: "Trading",
      route: "/secured/trading"
    },
    {
      main: "Products",
      title: "Investment Products",
      route: "/secured/investment"
    },
    {
      main: "Products",
      title: "Advice Solutions",
      route: "/secured/invest-with-us/wealth-management-services"
    },
    {
      main: "Products",
      title: "Financial Planning",
      route: "/app/accounts/financialplanning"
    },
    {
      main: "Products",
      title: "Work With a Consultant",
      route: "/secured/invest-with-us/professional-advice"
    },
    {
      main: "Products",
      title: "Featured Offerings",
      route: "/secured/featured-products"
    },
    {
      main: "Products",
      title: "Commissions & Fees",
      route: "/secured/pricing"
    },
    {
      main: "Products",
      title: "Investing & Planning Tools",
      route: "/secured/tools-overview"
    },
    {
      main: "Learn",
      title: "Insights & Education",
      route: "/app/learn/#/home-client"
    },
    {
      main: "Learn",
      title: "Market Commentary",
      route: "/app/learn/#/market-commentary"
    },
    {
      main: "Learn",
      title: "Trading",
      route: "/app/learn/#/trading"
    },
    {
      main: "Learn",
      title: "thinkorswim Demos",
      route: "/app/learn/#/thinkorswim-demos"
    },
    {
      main: "Learn",
      title: "Planning & Retirement",
      route: "/app/learn/#/planning"
    },
    {
      main: "Learn",
      title: "Tax Center",
      route: "/secured/taxes"
    },
    {
      main: "Learn",
      title: "Courses",
      route: "/app/learn/#/courses"
    },
    {
      main: "Learn",
      title: "Schwab Coaching™",
      route: "/secured/coaching"
    },
    {
      main: "Learn",
      title: "Onward Magazine",
      route: "/app/learn/#/onward"
    },
    {
      main: "Learn",
      title: "Podcasts",
      route: "/app/learn/#/podcasts"
    },
    {
      main: "Learn",
      title: "Schwab Network",
      route: "/secured/schwab-network"
    },
    {
      main: "Learn",
      title: "New Client Welcome Center",
      route: "/secured/new-client-welcome-center"
    },
    {
      main: 'How To',
      title: 'How To',
      route: '/secured/how-to-center',
    },
  ];

  openDialog (event: MouseEvent, component: any) {
      this.openDialogService.openDialog(event, component, this.firstMenuItem)
  }

  // Sets the main menu active class
  setActiveClass() {
    for (let i = 0; i < this.subMenu.length; i++) {
      if (this.subMenu[i].route === this.location.path()) {
        this.currentlyActive = this.subMenu[i].main;
      }
    }
  }

  // Shows the active class submenu links
  showActiveClassLinks() {
    // 1. where main === currently active
    for (let i = 0; i < this.subMenu.length; i++) {
      if (this.subMenu[i].main === this.currentlyActive) {
        this.currentLinks.push(this.subMenu[i])
      }
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setActiveClass();
    this.showActiveClassLinks();
  }
}
