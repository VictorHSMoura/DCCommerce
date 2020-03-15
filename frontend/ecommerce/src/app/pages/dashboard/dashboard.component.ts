import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { logout } from 'src/app/stores/auth/auth.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  public logout() {
    this.store.dispatch(logout({ }));
  }

  ngOnInit() {
  }

}
