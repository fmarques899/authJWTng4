import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, UserService } from '../services/index'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  personIdentifierForm: FormGroup;
  registrationForm: FormGroup;
  alert: string;
  ar: Array<string>[] = [];


  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router

  ) {

    this.registrationForm = fb.group({
      'password': [null, Validators.compose([Validators.required])],
      'password_confirmation': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required])],
      'email_confirmation': [null, Validators.compose([Validators.required])],
    })
    this.personIdentifierForm = fb.group({
      'cpf': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'dateOfBirth': [null, Validators.compose([Validators.required])],
    })


    this.personIdentifierForm.controls['cpf'].statusChanges.subscribe(info => {

    })



  }

  isValidPerson() {
    let isPersonValid = false;
    if (this.personIdentifierForm.value.cpf !== undefined && this.personIdentifierForm.value.dateOfBirth) {
      if (this.personIdentifierForm.valid) {
        isPersonValid = this.userService.getInfoByCPFAndbirthDate(this.personIdentifierForm.value.cpf, this.personIdentifierForm.value.dateOfBirth);
      } else {
        isPersonValid = false;
      }
    }


    return isPersonValid;
  }

  ngOnInit() {
  }

  resetFields() {
    //Function for clean values in form
    this.personIdentifierForm.reset();
  }

  signUp(user: any) {
    //Function for register User in server
    // user service user_service f
    console.log("Register");
    this.userService.signUp(user).subscribe(
      data => {
        this.alertService.success(JSON.stringify(data));
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error.json());
        this.alertService.success(JSON.stringify(error))
      }

    )

  }



}
