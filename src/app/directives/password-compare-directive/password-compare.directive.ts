import { Directive, HostListener, Input } from '@angular/core';
import {
    NG_VALIDATORS,
    AbstractControl,
    ValidationErrors,
    Validator,
} from '@angular/forms';

@Directive({
    selector: '[appPasswordCompare]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordCompareDirective,
            multi: true,
        },
    ],
})
export class PasswordCompareDirective implements Validator {
    @Input() appPasswordCompare: string;
    constructor() {}
    validate(control: AbstractControl): ValidationErrors | null {
        if (
            control &&
            control.value != null &&
            control.dirty &&
            control.value !== this.appPasswordCompare
        ) {
            return { compare: true };
        }
        return null;
    }
}
