import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/reducers';
import { getAuthLoggedUser } from 'src/app/stores/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(
    public router: Router,
    private store: Store<AppState>,
  ) {}
  async canActivate(): Promise<boolean> {
    const loggedUser = await this.store.select(getAuthLoggedUser).pipe(first()).toPromise();
    if (loggedUser) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
