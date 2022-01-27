import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName: string = '';
  pass: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.userName, this.pass);
  }

}
