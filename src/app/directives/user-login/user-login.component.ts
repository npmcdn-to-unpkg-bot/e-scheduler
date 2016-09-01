import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, UserLogin } from '../../shared';

@Component({
  selector: 'user-login',
  templateUrl: './app/directives/user-login/user-login.component.html',
  styleUrls: ['./app/directives/user-login/user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: UserLogin;

 constructor(private userService: UserService, private router: Router) {
   this.user=new UserLogin('test', 'lol');
 }

 checkLoggedIn() {
    return this.userService.isLoggedIn();
  }
  onSubmit(email, password) {
      email="fantom92@windowslive.com";
      password="23232323";
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
  }

}
