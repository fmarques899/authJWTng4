import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../services/index';


@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var isAuthorized = false;
      const userToken = localStorage.getItem('token');
    if(userToken !== "" && userToken !== undefined && userToken !== null ) {
        this.alertService.removeElement("Usuario não autorizado para esta rota");
        // Calling user service to validate token (not implemented yet)
        if(this.userService.valid(localStorage.getItem('token'))) {
            isAuthorized = true;
        } else {
            isAuthorized = false;
        }

    } else {
      this.alertService.success("Usuario não autorizado para esta rota");
      this.router.navigate(['login']);
    }

    return isAuthorized;
  }
}
