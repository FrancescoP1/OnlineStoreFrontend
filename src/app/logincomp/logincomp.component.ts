import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {
  loginForm: FormGroup;
  fireBaseErrorMessage: string;
  hide: boolean;
  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { 
    this.fireBaseErrorMessage = "";
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
    this.hide = true;
  }
  ngOnInit(): void {
  }

  logIn() {
    if(this.loginForm.invalid)
      return;
    this.authService.logInUser(this.loginForm.value.email, this.loginForm.value.password)
                    .then((result) => {
                      if(result == null) {
                        console.log('Logging in...');
                        this.router.navigate(['dashboard']);
                      } else if(result.isValid == false) {
                        console.log('Login error: ', result);
                        this.fireBaseErrorMessage = result.message;
                      }
                    });
  }

}
