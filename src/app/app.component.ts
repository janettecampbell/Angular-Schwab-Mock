import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarNotLoggedInComponent } from './navbars/navbar-not-logged-in/navbar-not-logged-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarNotLoggedInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Charles-Schwab-Mock';
}
