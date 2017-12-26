import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoginAuthService {

  showNavbar = new EventEmitter<boolean>();

  auth = false;

  constructor( private router: Router) { }

  fazerLogin(user) {
    if ((user.login === 'bruno.mazzola') && (user.password === 'lilica21')) {
      this.auth = true;
      this.showNavbar.emit(true);
      this.router.navigate(['/']);
    } else {
      this.auth = false;
      this.showNavbar.emit(false);
    }
    return false;
  }

  usuarioAuth() {
    return this.auth;
  }

}
