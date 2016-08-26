import {Component, NgZone} from '@angular/core';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { LoginComponent } from './login.component';
import { LogOutComponent } from './logout.component';

import { UserService } from './user.service';

@Component({
	selector: 'app-root',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  directives: [LoginComponent, LogOutComponent],
  providers: [UserService]
})
export class AppComponent {
  constructor(private userService: UserService) {}

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
}