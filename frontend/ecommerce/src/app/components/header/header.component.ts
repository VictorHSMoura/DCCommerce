import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { User } from 'src/app/models/auth';
import { Observable } from 'rxjs';
import { getAuthLoggedUser } from 'src/app/stores/auth/auth.selectors';
import { logout } from 'src/app/stores/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public loggedUser$: Observable<User>;

  constructor(
    private store: Store<AppState>,
  ) { }

  public logout() {
    this.store.dispatch(logout({ }));
  }

  ngOnInit() {
    this.loggedUser$ = this.store.select(getAuthLoggedUser);
  }

}
