


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('block') === 'true') {
      // this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  constructor(private router: Router) { }
}
