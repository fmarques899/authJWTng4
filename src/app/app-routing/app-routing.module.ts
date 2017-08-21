import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { SignInComponent } from '../sign-in/sign-in.component'
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
    {
      path: '',
      component: SignInComponent,
      canActivate: [
        UserGuard
      ]
    },
      {
      path: 'register',
      component: SignUpComponent,
      canActivate: [
        
      ]
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
