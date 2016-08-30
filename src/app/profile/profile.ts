import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { DataService } from '../shared';

@Component({
  selector: 'profile',
  template: `
	 <img src="../app/assets/profiles/{{profile.picture}}.jpg" style="width: 80px; height: 80px;" /> <h1>{{profile.name}}</h1>    
   <h2>Chuck quote of the day</h2>
   {{quote}}
	`
})
export class Profile implements OnInit, OnDestroy, AfterContentInit {
  profile: any;
  quote: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    this.dataService
      .getSecretQuote()
      .subscribe(
        data => this.quote = data,
        err => this.quote = "No connection to backend..."
      );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
}
