import { Routes } from '@angular/router';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { SummaryComponent } from './pages/clientapps/summary/summary.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path:"",
    redirectTo: "client-home",
    pathMatch: "full"
  },
  {
    path:"client-home",
    component: ClientHomeComponent,
  },
  {
    path:"clientapps/accounts/summary",
    component: SummaryComponent,
    canActivate: [authGuard],
  }
];
