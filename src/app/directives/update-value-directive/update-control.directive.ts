import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Directive({
    selector: '[appUpdateControl]',
})
export class UpdateControlDirective {
    @Input() appUpdateControl: NgModel;
    constructor() {}

    @HostListener('ngModelChange', ['$event']) update() {
        if (this.appUpdateControl != null) {
            setTimeout(() => {
                this.appUpdateControl.control.updateValueAndValidity();
            });
        }
    }
}
