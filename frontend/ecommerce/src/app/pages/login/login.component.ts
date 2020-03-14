import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/models/auth';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { loginRequested } from 'src/app/stores/auth/auth.actions';
import { Observable } from 'rxjs';
import { getAuthIsLoading } from 'src/app/stores/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading$: Observable<boolean>;
  public faCoffee = faCoffee;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }

  public async login(): Promise<void> {
    const credential = this.loginForm.value as Credentials;
    this.store.dispatch(loginRequested({ credential, loginType: 'email' }));
  }

  public async loginFacebook(): Promise<void> {
    const credential = this.loginForm.value as Credentials;
    this.store.dispatch(loginRequested({ credential, loginType: 'facebook' }));
  }

  public async loginGoogle(): Promise<void> {
    const credential = this.loginForm.value as Credentials;
    this.store.dispatch(loginRequested({ credential, loginType: 'google' }));
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    this.initForm();
    this.isLoading$ = this.store.select(getAuthIsLoading);
  }

}
