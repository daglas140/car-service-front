import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordForcerComponent } from './password-forcer.component';

describe('PasswordForcerComponent', () => {
    let component: PasswordForcerComponent;
    let fixture: ComponentFixture<PasswordForcerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordForcerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordForcerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
