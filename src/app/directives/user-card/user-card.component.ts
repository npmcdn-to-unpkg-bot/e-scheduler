import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-card',
    templateUrl: './app/directives/user-card/user-card.component.html',
    styleUrls: ['./app/directives/user-card/user-card.component.css']
})
export class UserCardComponent implements OnInit {
    profile: any;

    constructor() { }

    ngOnInit(): void {
            this.profile = JSON.parse(localStorage.getItem('profile'));
     }
}