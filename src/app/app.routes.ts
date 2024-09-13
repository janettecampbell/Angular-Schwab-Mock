import { Routes } from '@angular/router';
import { ClientHomeComponent } from './pages/client-home/client-home.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo: "client-home",
    pathMatch: "full"
  },
  {
    path:"client-home",
    component: ClientHomeComponent,
  }
];
