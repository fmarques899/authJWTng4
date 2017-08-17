import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm : FormGroup;  
  
  constructor(
    private fb : FormBuilder,
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


  signIn(){
    console.log("Login");
    
  }

  resetFields(){
    this.signInForm.reset();
  }

}
