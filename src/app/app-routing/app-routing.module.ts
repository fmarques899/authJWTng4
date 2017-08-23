import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { SignInComponent } from '../sign-in/sign-in.component'
import { UserGuard } from '../guards/user.guard';
import { LoggedGuard } from '../guards/logged.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: SignInComponent,
      // canActivate: [
      //   LoggedGuard
      // ]
    },
      {
      path: 'register',
      component: SignUpComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [
        UserGuard
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
