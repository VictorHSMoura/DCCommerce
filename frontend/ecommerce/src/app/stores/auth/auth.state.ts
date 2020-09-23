import { User } from 'src/app/models/auth';

export interface AuthState {
  loggedUser: User;
  isLoading: boolean;
  error: any;
}

export const authEmptyState: AuthState = {
  loggedUser: null,
  isLoading: false,
  error: null,
};
