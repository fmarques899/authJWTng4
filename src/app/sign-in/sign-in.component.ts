import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms'
import { UserService, AlertService, CryptoService } from '../services/index';
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
    private cryptoService: CryptoService,
    private router: Router
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

  signIn(user : any) {
    this.userService.signIn(user).subscribe(
      data=>{
        let encryptedToken = this.cryptoService.encrypt(data.jwt, 'Yi Mobile');
        localStorage.setItem('token', encryptedToken);
        this.router.navigate(['/dashboard']);
      },
      error=>{
        console.log(error);
        this.alertService.success(error);
      }
    )
  }

  resetFields(){
    this.signInForm.reset();
  }

}
