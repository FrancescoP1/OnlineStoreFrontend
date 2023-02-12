import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-registercomp',
  templateUrl: './registercomp.component.html',
  styleUrls: ['./registercomp.component.css']
})
export class RegistercompComponent implements OnInit {

  signUpForm!: FormGroup;
  fireBaseErrorMessage: String;
  hide: boolean;

  constructor(private authService: AuthService, private routers: Router, private afAuth: AngularFireAuth) {
      this.fireBaseErrorMessage = "";
      this.hide = true;
   }

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
        'displayName': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required])
      });
  }

  signUp() {
    if(this.signUpForm.invalid)
        return;
    this.authService.signUpUser(this.signUpForm.value).then((result) => {
        if(result == null) {
            this.routers.navigate(['/dashboard']);
        } else if(result.isValid == false){
            this.fireBaseErrorMessage = result.message;
        }
    }).catch(() =>{

    });
  }

}
