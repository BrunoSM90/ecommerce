import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginService: LoginAuthService) { }

  ngOnInit() {}

  fazerLogin() {
    this.loginService.fazerLogin(this.user);
  }

}
