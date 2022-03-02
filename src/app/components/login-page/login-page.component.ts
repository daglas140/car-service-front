import { Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StatusConstants } from '@model/StatusConstants';
import { NgForm, NgModel } from '@angular/forms';
import { UserLoginModel } from '@model/UserLoginModel';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    StatusConstants = StatusConstants;

    loginStatusType = 'Logowanie';
    userModel = <UserLoginModel>{};
    switchBetweenRegistrationLogin = false;
    hidePassword = true;
    hideRepeatedPassword = true;
    @Input() loginComponentStatus =
        StatusConstants.LOGIN_COMP_STATUS_REGISTRY_LOGIN;
    @ViewChild('passowrd') passowrd: NgModel;
    @ViewChild('repeatedPassword') repeatedPassword: NgModel;
    @ViewChild('myForm')
    myForm: NgForm;
    constructor(private userService: UserService) {}

    changeDisplayState_changeHandler(): void {
        this.switchBetweenRegistrationLogin =
            !this.switchBetweenRegistrationLogin;
    }

    onSubmit(login: boolean) {
        if (login) {
            this.login();
        }
        this.register();
    }

    login() {
        this.userService.login(this.userModel.login, this.userModel.password);
    }

    register() {}
}
