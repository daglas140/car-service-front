import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    ViewEncapsulation,
} from '@angular/core';
import { RegexpConstants } from '@model/RegexpConstants';
@Component({
    selector: 'app-password-forcer',
    templateUrl: './password-forcer.component.html',
    styleUrls: ['./password-forcer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PasswordForcerComponent {
    mediumPassword = false;
    strongPassword = false;
    passwordPowerValue = '';
    warnIconType = '';
    @Input() inputType: string;
    @Input() set value(value: string) {
        if (!value && this.inputType !== 'password') {
            return;
        }
        this.checkPowerOfPassword(value);
    }

    constructor() {}

    checkPowerOfPassword(value: any) {
        const strongPassword = new RegExp(
            RegexpConstants.STRONG_PASSWORD_REGEXP
        );
        const mediumPassword = new RegExp(
            RegexpConstants.MEDIUM_PASSWORD_REGEXP
        );

        if ((this.strongPassword = strongPassword.test(value))) {
            this.warnIconType = 'pass';
        } else if ((this.mediumPassword = mediumPassword.test(value))) {
            this.warnIconType = 'warning';
        } else {
            this.warnIconType = 'error';
        }
    }
}
