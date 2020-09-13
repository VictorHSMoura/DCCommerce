import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials } from 'src/app/models/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router,
    private ngZone: NgZone,
    public afAuth: AngularFireAuth,
  ) { }

  public async registerUser(value: Credentials): Promise<firebase.auth.UserCredential> {
    const res: firebase.auth.UserCredential = await firebase.auth().createUserWithEmailAndPassword(value.email, value.password);
    return res;
  }

  public async loginWrap(method: 'facebook' | 'google' | 'email', credentials?: Credentials): Promise<firebase.auth.UserCredential> {
    switch (method) {
      case 'facebook':
        return await this.facebookLogin();
      case 'google':
        return await this.googleLogin();
      case 'email':
        return await this.loginUser(credentials);
      default:
        return new Promise((resolve, reject) => reject());
    }
  }

  public async resetPassword({ email }): Promise<void> {
    await firebase.auth().sendPasswordResetEmail(email);
  }

  public async loginUser(value: Credentials): Promise<firebase.auth.UserCredential> {
    const res: firebase.auth.UserCredential = await firebase.auth().signInWithEmailAndPassword(value.email, value.password);
    return res;
  }

  public async facebookLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const res: firebase.auth.UserCredential = await this.afAuth.auth.signInWithPopup(provider);
    return res;
  }

  public async googleLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const res = await this.afAuth.auth.signInWithPopup(provider);
    return res;
  }

  public async logout(): Promise<void> {
    this.ngZone.run(() => {
      this.ngZone.runOutsideAngular(() => {
        localStorage.clear();
        this.router.navigate(['login']);
      });
    });
  }

}
