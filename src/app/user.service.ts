import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      'http://localhost:3002/api/login',
      JSON.stringify({ email, password }),
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log("response: ");
        console.log(res);
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          localStorage.setItem('profile', JSON.stringify(res.profile));
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('profile');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}