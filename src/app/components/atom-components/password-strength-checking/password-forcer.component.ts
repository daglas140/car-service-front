import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { RegexpConstants } from '@model/RegexpConstants';
@Component({
    selector: 'app-password-forcer',
    templateUrl: './password-forcer.component.html',
    styleUrls: ['./password-forcer.component.scss'],
})
export class PasswordForcerComponent {
    mediumPassword = false;
    strongPassword = false;
    passwordPowerValue = '';
    @Input() inputType: string;
    @Input() set value(value: string) {
        if (!value && this.inputType !== 'password') {
            return;
        }
        this.checkPowerOfPassword(value);
    }

    @ViewChild('passwordStrengthElement')
    passwordStrengthElement: ElementRef<HTMLElement>;

    constructor() {}

    checkPowerOfPassword(value: any) {
        if (
            this.passwordStrengthElement &&
            this.passwordStrengthElement.nativeElement
        ) {
            const strongPassword = new RegExp(
                RegexpConstants.STRONG_PASSWORD_REGEXP
            );
            const mediumPassword = new RegExp(
                RegexpConstants.MEDIUM_PASSWORD_REGEXP
            );

            if ((this.strongPassword = strongPassword.test(value))) {
                this.passwordStrengthElement.nativeElement.style.background =
                    'green';
                this.passwordPowerValue = 'Mocne hasło';
            } else if ((this.mediumPassword = mediumPassword.test(value))) {
                this.passwordStrengthElement.nativeElement.style.background =
                    'yellow';
                this.passwordPowerValue = 'Średnie hasło';
            } else {
                this.passwordStrengthElement.nativeElement.style.background =
                    'red';
                this.passwordPowerValue = 'Słabe hasło';
            }
        }
    }
}
