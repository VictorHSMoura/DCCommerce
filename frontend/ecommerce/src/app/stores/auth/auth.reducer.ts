import { createReducer, on, Action } from '@ngrx/store';
import { authEmptyState, AuthState } from './auth.state';
import * as AuthActions from './auth.actions';

const reducer = createReducer(
  authEmptyState,
  on(AuthActions.setLoggedUser, (state, { user }) => {
    return ({ ...state, loggedUser: user });
  }),
  on(AuthActions.logout, state => state = authEmptyState),
  on(AuthActions.authError, state => ({ ...state, isLoading: false })),
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}
