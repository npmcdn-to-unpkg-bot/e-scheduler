import {tokenNotExpired} from 'angular2-jwt';
import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthGuard implements CanActivate {
  userService: UserService;
  constructor(@Inject(UserService) userService: UserService , private router: Router) {
    this.userService=userService;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.userService.isLoggedIn());
    if (this.userService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}