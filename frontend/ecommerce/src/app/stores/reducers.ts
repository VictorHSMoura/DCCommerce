import { ActionReducerMap, createSelector } from '@ngrx/store';

// States:
import { AuthState } from './auth/auth.state';

// Reducers:
import { authReducer } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const mapApplicationState = (state: AppState) => state;
export const getApplicationState = createSelector(mapApplicationState, (state: AppState) => state);
