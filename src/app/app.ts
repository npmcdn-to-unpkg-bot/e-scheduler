import {Component, NgZone, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { UserService } from './shared';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { UserCardComponent } from './directives/user-card/user-card.component';
import { UserLogoutComponent } from './directives/user-logout/user-logout.component';
import { UserLoginComponent } from './directives/user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  directives: [UserLoginComponent, UserLogoutComponent, UserCardComponent, ROUTER_DIRECTIVES]
})
export class AppComponent implements AfterViewInit {
  constructor(private userService: UserService, private translate: TranslateService) {
    translate.addLangs(["en", "hu"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en');
  }
  setLanguage(lang: string): void {
    console.debug("Language selected: " + lang);
    this.translate.use(lang);
  }
  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
  ngAfterViewInit() {
    //console.debug('ngAfterViewInit() called');
  }
}