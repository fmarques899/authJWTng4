import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(private router : Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let canActivateRoute = false;

    let userToken = localStorage.getItem('token');
    
    if( userToken === "" || userToken === undefined || userToken === null) {
      console.log("Can activate login route")
      canActivateRoute = true;
    } else {
      canActivateRoute = false;
      console.log("Cannot activate login route, redirect to dashboard");
      this.router.navigate(['dashboard'])
    }

    return canActivateRoute;
  }
}
