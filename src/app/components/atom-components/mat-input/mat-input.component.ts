import { Component, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { RegexpConstants } from 'app/model';

@Component({
    selector: 'app-mat-input',
    templateUrl: './mat-input.component.html',
    styleUrls: ['./mat-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MatInputComponent),
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class MatInputComponent implements ControlValueAccessor {
    _ngModel: any;
    hidePassword = true;
    inputType = '';

    wrongEmailAdress = false;
    wrongPassword = false;

    constructor() {}
    @Input() required = false;
    @Input() set type(value: string) {
        this.inputType = value;
    }
    @Input() appearance: MatFormFieldAppearance = 'fill';
    @Input() label = 'label';
    @Input() placeholder = '';
    @Input() isPasswordForcerVisible = false;

    onChange: any = () => {};
    onTouch: any = () => {};

    set ngModel(value: any) {
        this._ngModel = value;
    }

    writeValue(value: any) {
        this.ngModel = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    checkControlErrors(inputType: string, inputValue: string): void {
        switch (inputType) {
            case 'password':
                this.checkPasswordIsCorrect();
                break;
            case 'email':
                this.checkEmailIsCorrect(inputValue);
                break;
        }
    }

    checkEmailIsCorrect(inputValue: string): void {
        const emailRegexp = new RegExp(RegexpConstants.EMAIL_REGEXP);
        this.wrongEmailAdress = !emailRegexp.test(inputValue);
    }

    checkPasswordIsCorrect(): void {
        // return of service error
    }
}
