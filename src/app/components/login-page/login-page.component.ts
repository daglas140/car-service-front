import { Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StatusConstants } from '@model/StatusConstants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    StatusConstants = StatusConstants;

    loginStatusType = 'Logowanie';

    switchBetweenRegistrationLogin = false;

    @Input() loginComponentStatus =
        StatusConstants.LOGIN_COMP_STATUS_REGISTRY_LOGIN;

    value = '';
    pass = '';
    userName = '';
    loginName = '';

    @ViewChild('myForm') myForm: NgForm;
    constructor(private userService: UserService) {}

    login() {
        this.userService.login(this.userName, this.pass);
    }

    changeDisplayState_changeHandler(state: boolean): void {
        this.loginComponentStatus = state
            ? StatusConstants.LOGIN_COMP_STATUS_REGISTRY_BUTTON_STATE
            : '';
        this.switchBetweenRegistrationLogin = state;
        console.log('@@@@@@@@', this.myForm.form.controls);
    }
}
