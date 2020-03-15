import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { authError } from 'src/app/stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService,
    private store: Store<AppState>,
  ) { }

  public async reset(): Promise<void> {
    this.isLoading = true;
    const email = this.forgotPasswordForm.value;
    try {
      await this.authService.resetPassword(email);
      this.toasterService.pop('success', 'Email enviado');
    } catch (error) {
      this.store.dispatch(authError({ error }));
    }
    this.isLoading = false;
  }

  private initForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
