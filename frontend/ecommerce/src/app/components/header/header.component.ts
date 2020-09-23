import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { User } from 'src/app/models/auth';
import { Observable } from 'rxjs';
import { getAuthLoggedUser } from 'src/app/stores/auth/auth.selectors';
import { logout } from 'src/app/stores/auth/auth.actions';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public loggedUser$: Observable<User>;
  public searchForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public logout() {
    this.store.dispatch(logout({ }));
    this.router.navigate(['home']);
  }

  private initForm(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  public search(): void {
    if(this.searchForm.value.search !== '') {
      this.router.navigate(['search', this.searchForm.value.search]);
    }
  }

  ngOnInit() {
    this.loggedUser$ = this.store.select(getAuthLoggedUser);
    this.initForm();
  }

}
