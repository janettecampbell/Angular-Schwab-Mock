import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.autoLogin();
   }

   autoLogin () {
    if (localStorage.getItem("token")) {
      this.isAuth.next(true);
      this.router.navigate(["/clientapps/accounts/summary"]);
    }
   }

   logOut () {
    localStorage.removeItem("token");
    this.isAuth.next(false);
    this.router.navigate(["/client-home"])
   }
}
