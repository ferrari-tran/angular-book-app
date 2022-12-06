import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
