import { Component, inject } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar-logged-in',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './navbar-logged-in.component.html',
  styleUrl: './navbar-logged-in.component.scss',
})
export class NavbarLoggedInComponent {
  router = inject(Router);
  location = inject(Location);
  mainMenu: any = [
    { title: 'Accounts' },
    { title: 'Trade' },
    { title: 'Research' },
    { title: 'Move Money' },
    { title: 'Products' },
    { title: 'Learn' },
    { title: 'How to' },
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
  ];

  currentlyActive = '';

  setActiveClass() {
    for (let i = 0; i < this.subMenu.length; i++) {
      console.log("route from array:", this.subMenu[i].route)
      console.log("this.location.path()", this.location.path())
      if (this.subMenu[i].route === this.location.path()) {
        this.currentlyActive = this.subMenu[i].main;
      }
      console.log(this.currentlyActive);
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setActiveClass();
  }
}
