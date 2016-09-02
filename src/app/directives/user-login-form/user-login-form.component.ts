import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';

import { UserService, UserLogin } from '../../shared';

@Component({
  selector: 'user-login-form',
  templateUrl: './app/directives/user-login-form/user-login-form.component.html',
  styleUrls: ['./app/directives/user-login-form/user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {
  user: UserLogin;
  submitted: boolean;
  errorMessage=null;
  constructor(private userService: UserService, private router: Router) {
    this.user = new UserLogin('test', 'lol');
    this.submitted = false;
  }

  checkLoggedIn() {
    return this.userService.isLoggedIn();
  }
  onLogin(email, password) {
    email = "fantom92@windowslive.com";
    password = "23232323";
    this.userService.login(email, password).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['dashboard']);
        }
      });
  }
  onSubmit() {
    this.submitted = true;
    this.errorMessage=null;
    let email = "fantom92@windowslive.com";
    let password = "23232323";
    this.userService.login(email, password).subscribe(
      (result) => {
        console.debug(result);
        if (result) {
          this.router.navigate(['dashboard']);
        }
      },
      error =>  this.errorMessage = <any>error);
  }
  ngOnInit() {
  }

}
