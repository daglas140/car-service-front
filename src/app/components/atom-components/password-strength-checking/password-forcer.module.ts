import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordForcerComponent } from './password-forcer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
    declarations: [PasswordForcerComponent],
    imports: [BrowserModule, MatIconModule, MatTooltipModule],
    exports: [PasswordForcerComponent],
    providers: [],
})
export class PasswordForcerModule {}
