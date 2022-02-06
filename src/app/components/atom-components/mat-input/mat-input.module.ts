import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatInputComponent } from './mat-input.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordForcerModule } from '../password-strength-checking/password-forcer.module';
@NgModule({
    declarations: [MatInputComponent],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        PasswordForcerModule,
    ],
    exports: [MatInputComponent],
    providers: [],
})
export class MatInputComponentModule {}
