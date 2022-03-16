import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AdditionalNavBarComponent } from './additional-nav-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
    declarations: [AdditionalNavBarComponent],
    imports: [BrowserModule, MatIconModule, AppRoutingModule, MatTooltipModule],
    exports: [AdditionalNavBarComponent],
    providers: [],
})
export class AdditionalNavBarModule {}
