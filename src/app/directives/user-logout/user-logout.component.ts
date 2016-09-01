import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared';

@Component({
  selector: 'user-logout',
  templateUrl: './app/directives/user-logout/user-logout.component.html',
  styleUrls: ['./app/directives/user-logout/user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

   constructor(private userService: UserService, private router: Router) { }
  
  checkLoggedIn() {
    return this.userService.isLoggedIn();
  }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}