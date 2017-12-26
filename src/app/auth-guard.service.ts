import { LoginAuthService } from './services/login-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginAuthService, private router: Router) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | boolean {
    if (this.authService.usuarioAuth()) {
      return true;
    }
      this.router.navigate(['/login']);
      return false;
    }
  }
