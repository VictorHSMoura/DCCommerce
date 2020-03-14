import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/models/auth';
import { ToasterService } from 'angular2-toaster';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public faCoffee = faCoffee;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private authService: AuthService,
  ) { }

  public async login(): Promise<void> {
    try {
      const value = this.loginForm.value as Credentials;
      const res = await this.authService.loginUser(value);
    } catch (e) {
      this.toasterService.pop('error', 'Erro no login', 'Confira suas credenciais ou tente novamente mais tarde');
      console.log('login error', e);
    }
  }

  public async loginFacebook(): Promise<void> {
    try {
      const res = await this.authService.facebookLogin();
    } catch (e) {
      this.toasterService.pop('error', 'Erro no login com o facebook', 'Confira suas credenciais ou tente novamente mais tarde');
      console.log('login error', e);
    }
  }

  public async loginGoogle(): Promise<void> {
    try {
      const res = await this.authService.googleLogin();
    } catch (e) {
      this.toasterService.pop('error', 'Erro no login com o google', 'Confira suas credenciais ou tente novamente mais tarde');
      console.log('login error', e);
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
  }

}
