import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NavigateUrls} from "../../model/constants/NavigateUrls";

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {

  menuBarItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.menuBarItems = [
      {
        label: 'Warsztat',
        icon: 'pi pi-fw pi-home',
        items: [
          {
            label: 'Lista samochodów',
            icon: 'pi pi-fw pi-car',
            command: () => {this.route.navigate([NavigateUrls.CARS])}
          },
          {
            label: 'Lista klientów',
            icon: 'pi pi-fw pi-car'
          },
          {
            label: 'Lista części',
            icon: 'pi pi-fw pi-settings'
          }
        ]
      },
      {
        label:'Grafik',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Pokaż aktualny miesiąc',
            icon:'pi pi-fw pi-pencil',
            command: () => {this.route.navigate([NavigateUrls.CALENDAR])}
          }
        ]
      },
      {
        label:'Części',
        icon:'pi pi-fw pi-bars',
      }
    ];
    this.userMenuItems = [
      {
        label: 'Dodaj użytkownika',
        icon: 'pi pi-fw pi-plus',
        command: () => {
          this.addUser();
        }
      },
      {
        label: 'Wyloguj',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logOut();
        }
      }
    ];
  }

  logOut() {

  }

  addUser() {

  }

}
