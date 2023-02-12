import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
      this.userLoggedIn = false;
      this.afAuth.onAuthStateChanged((user) => {
          if(user) {
            this.userLoggedIn = true;
          } else {
            this.userLoggedIn = false;
          }
      });
  }

  signUpUser(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                let emailLowerCase = user.email.toLowerCase();
                result.user?.sendEmailVerification();
            }).catch((error) => {
                console.log('Auth Service: signup error', error);
                if(error.code){
                  return {isValid: false, message: error.message};
                }
                return {isValid: false, message: null}
                });
  }

  logInUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
            .then(() => {
              console.log('Auth Service: logInUser: success');
            })
            .catch(error => {
              console.log('Auth Service: login error...');
              console.log('error code: ', error.code);
              console.log('error:', error);
              if(error.code) {
                return {isValid: false, message: error.message};
              }
              return {isValid: false, message: null};
            });
  }
 }
