import { Component, OnInit } from '@angular/core';
import { NavbarElements } from '@model/';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    public icons: NavbarElements[] = [];
    isActive: boolean;
    constructor() {}

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user!);
        this.icons.push({
            id: 'clients',
            name: 'person',
            path: '',
            visibility: true,
            tooltip: 'Klienci',
        });
        this.icons.push({
            id: 'cars',
            name: 'directions_car',
            path: '',
            visibility: true,
            tooltip: 'Samochody',
        });
        this.icons.push({
            id: 'garage',
            name: 'build',
            path: '',
            visibility: true,
            tooltip: 'Garaż',
        });
        this.icons.push({
            id: 'calendar',
            name: 'calendar_today',
            path: '',
            visibility: true,
            tooltip: 'Kalendarz',
        });
    }
}
