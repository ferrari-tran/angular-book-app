import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm } from '../types/LoginForm';
import { RegisterForm } from '../types/RegisterForm';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    if (form.password !== form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.errorMessage = '';
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        this.errorMessage = `${errorMessage}`;
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
