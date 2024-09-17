import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer-logged-in',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer-logged-in.component.html',
  styleUrl: './footer-logged-in.component.scss'
})
export class FooterLoggedInComponent {
  today: Date = new Date();
}
