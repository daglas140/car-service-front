import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '@components/login-page/login-page.component';
import { MainPanelComponent } from '@components/main-panel/main-panel.component';
import { MenuPanelComponent } from '@components/menu-panel/menu-panel.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '@services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from '@components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { RouterLink } from '@angular/router';
import { GarageComponent } from '@components/garage/garage.component';
import { ClientsComponent } from '@components/clients/clients.component';
import { CarsComponent } from '@components/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputComponentModule } from '@components/atom-components/mat-input/mat-input.module';
import { MatTableComponentModule } from '@components/atom-components/mat-table/mat-table.module';
import { MatTooltipModule } from '@angular/material/tooltip';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
]);

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        MainPanelComponent,
        MenuPanelComponent,
        CalendarComponent,
        GarageComponent,
        ClientsComponent,
        CarsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        FullCalendarModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatInputComponentModule,
        MatTableComponentModule,
        MatTooltipModule,
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        UserService,
        RouterLink,
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'fill' },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
