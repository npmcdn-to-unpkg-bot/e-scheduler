import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'login',
  template: `<input type='button' value='Log In!' (click)="onSubmit()" *ngIf="!checkLoggedIn()"/>`
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

 checkLoggedIn() {
    return this.userService.isLoggedIn();
  }
  onSubmit(email, password) {
      email="fantom92@windowslive.com";
      password="23232323";
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
          console.debug(result);
        this.router.navigate(['profile']);
      }
    });
  }
}