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
  selector: 'app-learn',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {
  readonly dialog = inject(MatDialog)

  column1 = [
    {
      main: "Learn",
      title: "Insights & Education",
      route: "/app/learn/#/home-client"
    },
  ]

  column2 = [
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
  ]

  column3 = [
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
  ]

  closeDialog() {
    this.dialog.closeAll();
  }
}
