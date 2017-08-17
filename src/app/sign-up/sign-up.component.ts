import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    
  ) { 
    this.signUpForm = fb.group({
      'username':[null,Validators.required],
      'cpf':[null,Validators.required]
,     'password':[null,Validators.compose([Validators.required])],
      'password_confirmation': [null,Validators.required],
      'email': [null,Validators.compose([Validators.email,Validators.required])],
      'email_confirmation': [null,Validators.compose([Validators.email,Validators.required])]
    },
    {
      validatorPassword: this.checkIfMatchingPasswords('password', 'password_confirmation'),
      validatorEmail : this.checkIfMatchingEmails('email', 'email_confirmation')  
  },)
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
          return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
          }
        }

  checkIfMatchingEmails(emailKey: string, emailConfirmationKey: string) {
          return (group: FormGroup) => {
            let emailInput = group.controls[emailKey],
                emailConfirmationInput = group.controls[emailConfirmationKey];
            if (emailInput.value !== emailConfirmationInput.value) {
              return emailConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return emailConfirmationInput.setErrors(null);
            }
          }
        }      




  ngOnInit() {
  }

  resetFields(){
    //Function for clean values in form 
   this.signUpForm.reset();
  }
  
  signUp(){
    //Function for register User in server
    // user service user_service f 
    console.log("Register");
    
  }
  


}
