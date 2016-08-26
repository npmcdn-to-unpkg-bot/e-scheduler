import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'logout',
  template: `<input type='button' value='Log Out!' (click)="onLogout()" *ngIf="checkLoggedIn() "/>`
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