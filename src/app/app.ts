import {Component, NgZone, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { UserService } from './shared';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { UserCardComponent } from './directives/user-card/user-card.component';
import { UserLogoutComponent } from './directives/user-logout/user-logout.component';
import { UserLoginFormComponent } from './directives/user-login-form/user-login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  directives: [UserLoginFormComponent, UserLogoutComponent, UserCardComponent, ROUTER_DIRECTIVES]
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
  status: string = '';
  
  customClose(interesting: boolean) {
    if (interesting) {
      this.status = 'That article was interesting.';
    } else {
      this.status = 'Look for something else.';
    }
  }
  ngAfterViewInit() {
    //console.debug('ngAfterViewInit() called');
  }
}