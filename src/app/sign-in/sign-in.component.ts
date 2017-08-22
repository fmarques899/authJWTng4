import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms'
import { UserService, AlertService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
  ) {

    this.signInForm = fb.group({
      'username':[null,Validators.compose([Validators.required])],
      'cpf': [null,Validators.compose([Validators.required])],
      'email': [null,Validators.compose([Validators.required, Validators.email])],
      'password':[null,Validators.compose([ Validators.required ])],
    },

  )}

  ngOnInit() {
  }

  signIn(user : any){
    console.log("Login");
    this.userService.signIn(user).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error);
        this.alertService.success(error)
      }
    )
  }

  resetFields(){
    this.signInForm.reset();
  }

}
