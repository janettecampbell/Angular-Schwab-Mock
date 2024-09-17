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
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  readonly dialog = inject(MatDialog)

  column1 = [
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
  ]

  column2 = [
    {
      main: "Products",
      title: "Investment Products",
      route: "/secured/investment"
    },
  ]

  column3 = [
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
  ]

  column4 = [
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
  ]

  closeDialog() {
    this.dialog.closeAll();
  }
}
