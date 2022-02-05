import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {NavigateUrls} from "@model/NavigateUrls";
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: NavigateUrls.HOME},
  {path: NavigateUrls.HOME, component: MainPanelComponent},
  {path: NavigateUrls.LOGIN, component: LoginPageComponent},
  {path: NavigateUrls.CALENDAR, component: CalendarComponent},
  {path: NavigateUrls.CARS, component: CarsComponent},
  {path: NavigateUrls.CLIENTS, component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
