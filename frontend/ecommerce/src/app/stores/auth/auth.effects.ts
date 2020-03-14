import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { UtilsService } from './../../services/utils/utils.service';
import { AuthService } from './../../services/auth/auth.service';
import { from, of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions<AuthActions.AuthActionsTypes>,
    private utilsService: UtilsService,
    private router: Router,
    private authService: AuthService,
  ) { }

  authRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authActionTypes.loginRequested),
      switchMap((action) => {
        return from(this.authService.loginWrap(action.loginType, action.credential)).pipe(
          map(user => AuthActions.loginCompleted({ user })),
          catchError(error => of(AuthActions.authError({ error }))),
        );
      }),
    ),
  );

  authCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authActionTypes.loginCompleted),
        tap(() => {
          this.router.navigate(['/dashboard']);
        }),
      ),
    { dispatch: false },
  );

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
