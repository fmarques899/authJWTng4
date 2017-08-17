import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { SignInComponent } from '../sign-in/sign-in.component'

const routes: Routes = [
    {
      path: '',
      component: SignUpComponent
    },
      {
      path: 'register',
      component: SignInComponent
    },
    // otherwise redirect to home
    { 
      path: '**', 
      redirectTo: '' 
    },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
