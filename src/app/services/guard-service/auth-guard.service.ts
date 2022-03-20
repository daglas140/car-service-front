import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@model/user';
import { UserService } from '@services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class AuthGuardService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(private router: Router, private userService: UserService) {
        const userJson = localStorage.getItem('user');
        this.userSubject = new BehaviorSubject<User>(JSON.parse(userJson!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        this.userService.login(username, password).pipe(
            map((user) => {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            })
        );
    }

    logout() {
        const user = <User>{};
        localStorage.removeItem('user');
        this.userSubject.next(user);
        this.router.navigate(['/login']);
    }
}
