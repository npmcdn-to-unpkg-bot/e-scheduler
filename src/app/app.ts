import {Component, NgZone} from '@angular/core';
import {Location} from '@angular/common';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { LoginComponent } from './login.component';
import { LogOutComponent } from './logout.component';
import { UserService } from './user.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
	selector: 'app-root',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  directives: [ROUTER_DIRECTIVES, LoginComponent, LogOutComponent]
})
export class AppComponent {
  constructor(private userService: UserService, private translate: TranslateService) {
    translate.addLangs(["en", "hu"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en');
  }
  setLanguage(lang: string): void {
        console.debug("Language selected: "+lang);
        this.translate.use(lang);
    }
  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
}