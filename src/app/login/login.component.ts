import { Component, OnInit } from '@angular/core';

import { LoginAuthService } from '../services/login-auth.service';
import { User } from './user';

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
