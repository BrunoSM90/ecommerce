import { LoginAuthService } from './login-auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: LoginAuthService, private router: Router) { }

  verificarAcesso() {
    /*if (this.authService.usuarioAuth()) {
      return true;
    }
      this.router.navigate(['/formulario']);
      return false;*/
      return true;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | boolean {
    //return this.verificarAcesso();
    return true;
  }

  canLoad (route: Route): Observable <boolean> | boolean {
    //return this.verificarAcesso();
    return true;
  }

}
