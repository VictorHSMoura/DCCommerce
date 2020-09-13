import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Credentials, User } from 'src/app/models/auth';
import { setLoggedUser } from 'src/app/stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  public async register(): Promise<void> {
    try {
      const value = this.registerForm.value as Credentials;
      const reg = await this.authService.registerUser(value);

      const res = await this.authService.loginWrap('email', value);
      const { displayName, photoURL, email, phoneNumber } = res.user;
      const user: User = {
        displayName,
        photoURL,
        email,
        phoneNumber,
        loginType: 'email',
      };
      this.store.dispatch(setLoggedUser({ user }));
      this.router.navigate(['dashboard']);
    } catch (e) {
      this.toasterService.pop('error', 'Erro no registro', 'Confira suas credenciais ou tente novamente mais tarde');
      console.log('login error', e);
    }
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
