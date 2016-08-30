import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  getSecretQuote() : Observable<string> {
    return this.http
      .get('http://localhost:3002/api/quote')
      .map(res => res.json())
  }
}
