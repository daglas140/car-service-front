import { Component, OnInit } from '@angular/core';
import { NavbarElements } from '@model/NavbarElements';
@Component({
    selector: 'app-additional-nav-bar',
    templateUrl: './additional-nav-bar.component.html',
    styleUrls: ['./additional-nav-bar.component.scss'],
})
export class AdditionalNavBarComponent implements OnInit {
    public icons: NavbarElements[] = [];
    constructor() {}

    ngOnInit(): void {
        this.icons.push({
            id: 'logout',
            name: 'exit_to_app',
            visibility: true,
            action: this.logout,
            tooltip: 'Wyloguj',
        });
    }

    logout = () => {
        console.log('LOGGEDOUT');
    };
}
