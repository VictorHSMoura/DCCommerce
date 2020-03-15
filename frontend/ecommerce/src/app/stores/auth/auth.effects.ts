import { tap } from 'rxjs/operators';
import { UtilsService } from './../../services/utils/utils.service';
import { AuthService } from './../../services/auth/auth.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions<AuthActions.AuthActionsTypes>,
    private utilsService: UtilsService,
    private authService: AuthService,
  ) { }

  authLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authActionTypes.logout),
        tap(() => this.authService.logout()),
      ),
    { dispatch: false },
  );

  authError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authActionTypes.error),
        tap(action => this.utilsService.handleError(action.error)),
      ),
    { dispatch: false },
  );

}
