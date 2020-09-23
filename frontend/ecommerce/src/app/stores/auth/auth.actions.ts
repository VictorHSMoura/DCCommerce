import { createAction, union, props } from '@ngrx/store';
import { type } from 'src/app/utils/functions';
import { User } from 'src/app/models/auth';

export const authActionTypes = {
  setLoggedUser: type('[Auth] -Auth set logged user-'),
  logout: type('[Auth] -Auth logout-'),
  error: type('[Auth] -Auth error-'),
};

export const setLoggedUser = createAction(authActionTypes.setLoggedUser, props<{ user: User }>());
export const logout = createAction(authActionTypes.logout, props<{ }>());
export const authError = createAction(authActionTypes.error, props<{ error: any }>());

const all = union({
  setLoggedUser,
  logout,
  authError,
});

export type AuthActionsTypes = typeof all;
