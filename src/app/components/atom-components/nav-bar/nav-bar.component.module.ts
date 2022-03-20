import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
    declarations: [NavBarComponent],
    imports: [BrowserModule, MatIconModule, AppRoutingModule, MatTooltipModule],
    exports: [NavBarComponent],
    providers: [],
})
export class NavbarModule {}
