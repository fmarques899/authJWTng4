import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var isAuthorized = false;
      console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null ) {
        console.log("Autorizando usuario");
        // Calling user service to validate token (not implemented yet)
        isAuthorized = true;
    } else {
      console.log("Usuario nao autorizado para esta rota");
    }

    return isAuthorized;
  }
}
