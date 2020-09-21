export interface Credentials {
  email: string;
  password: string;
}

export interface CredentialsWithName {
  username: string;
  email: string;
  password: string;
}

export interface User {
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: string;
  loginType?: 'facebook' | 'google' | 'email';
}
