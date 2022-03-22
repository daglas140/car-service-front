import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;
    let htmlElement: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [RouterTestingModule, MatIconModule, MatTooltipModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Navbar has logo text', () => {
        fixture = TestBed.createComponent(NavBarComponent);
        htmlElement = fixture.nativeElement;
        htmlElement.querySelector('h2.logo-text-line-height.logo-top-space');
        expect(htmlElement.innerHTML).toContain('.Car service');
    });

    it('Navbar should have a certain number of elements (4)', () => {
        fixture = TestBed.createComponent(NavBarComponent);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const element: DebugElement[] = fixture.debugElement.queryAll(
                By.css('.icon-container')
            );
            expect(element.length).toEqual(4);
        });
    });

    it('Should be navigate', () => {
        fixture = TestBed.createComponent(NavBarComponent);
        const router = TestBed.inject(Router);
        const navigateSpy = spyOn(router, 'navigate');
        component = fixture.componentInstance;

        component.navigate('/');
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
    });
});
