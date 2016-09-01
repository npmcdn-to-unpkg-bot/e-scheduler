import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'logout',
  template: `<img src='../app/assets/icons/logout.svg' aria-label='Logout'
   (click)='onLogout()' *ngIf='checkLoggedIn()' 
   style='margin-left:18px;margin-right:10px;cursor:pointer;width: 32px;height:32px;'  
   md-tooltip="Log me out!" [tooltip-position]='bottom'>`
})
export class LogOutComponent {
  constructor(private userService: UserService, private router: Router) { }
  
  checkLoggedIn() {
    return this.userService.isLoggedIn();
  }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}