import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarNotLoggedInComponent } from './navbars/navbar-not-logged-in/navbar-not-logged-in.component';
import { FooterNotLoggedInComponent } from './footers/footer-not-logged-in/footer-not-logged-in.component';
import { NavbarLoggedInComponent } from './navbars/navbar-logged-in/navbar-logged-in.component';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarNotLoggedInComponent, FooterNotLoggedInComponent, NavbarLoggedInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Charles-Schwab-Mock';

  authService = inject(AuthService);

  isLoggedIn = this.authService.isAuth

}
