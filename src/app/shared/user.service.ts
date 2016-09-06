import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';
import { LoginResponse } from '../shared/interfaces';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password): Observable<LoginResponse> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      'http://localhost:3002/api/login',
      JSON.stringify({ email, password }),
      { headers }
      )
      .map((res: Response) => <LoginResponse>res.json())
      .do((res) => {
        console.log(res);
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          localStorage.setItem('profile', JSON.stringify(res.profile));
          this.loggedIn = true;
        }

        return res.success;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('profile');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  private handleError(error: Response) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.error(error);
    let errMsg = 'server.response.error.connection';
    return Observable.throw(errMsg);
  }
}