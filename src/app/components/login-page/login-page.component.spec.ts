import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PasswordCompareDirective } from '@directives/password-compare-directive/password-compare.directive';
import { UpdateControlDirective } from '@directives/update-value-directive/update-control.directive';
import { AuthGuardService } from '@services/guard-service/auth-guard.service';
import { UserService } from '@services/user.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;
    let htmlElement: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LoginPageComponent,
                PasswordCompareDirective,
                UpdateControlDirective,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                MatIconModule,
                MatTooltipModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
            ],
            providers: [UserService, HttpClient, HttpHandler, AuthGuardService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Initialize header title of login form should be "LOGOWANIE"', fakeAsync(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            htmlElement = fixture.nativeElement;
            const topSectionInnerText =
                htmlElement.querySelector('#topSection')?.innerHTML;
            console.log('text', topSectionInnerText);
            expect(topSectionInnerText).toEqual('LOGOWANIE');
        });
    }));
});
