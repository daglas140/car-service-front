import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { AuthGuardService } from '@services/guard-service/auth-guard.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthGuardService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user) {
            if (
                route.data.roles &&
                route.data.roles.indexOf(user.role) === -1
            ) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }

        this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    }
}
