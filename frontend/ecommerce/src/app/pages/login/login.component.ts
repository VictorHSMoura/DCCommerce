import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials, User } from 'src/app/models/auth';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { authError, setLoggedUser } from 'src/app/stores/auth/auth.actions';
import { Observable } from 'rxjs';
import { getAuthIsLoading } from 'src/app/stores/auth/auth.selectors';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    private authService: AuthService,
  ) { }

  public async login(method: 'email' | 'facebook' | 'google'): Promise<void> {
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
      localStorage.setItem('loggedUser', JSON.stringify(user));
    } catch (error) {
      this.store.dispatch(authError({ error }));
    }
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
