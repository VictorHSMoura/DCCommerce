import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials, User } from 'src/app/models/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { authError, setLoggedUser } from 'src/app/stores/auth/auth.actions';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService,
  ) { }

  public async login(method: 'email' | 'facebook' | 'google'): Promise<void> {
    this.isLoading = true;
    const credential = this.loginForm.value as Credentials;
    try {
      const res = await this.authService.loginWrap(method, credential);
      const { displayName, photoURL, email, phoneNumber } = res.user;
      const user: User = {
        displayName,
        photoURL,
        email,
        phoneNumber,
        loginType: method,
      };
      this.store.dispatch(setLoggedUser({ user }));
      this.router.navigate(['profile']);
    } catch (error) {
      this.store.dispatch(authError({ error }));
    }
    this.isLoading = false;
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
