import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing/app-routing.module';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService, CryptoService, UserService } from './services/index'
import { UserGuard } from './guards/user.guard';
import { LoggedGuard } from './guards/logged.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AlertComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule

  ],
  providers: [
    AlertService,
    CryptoService,
    UserGuard,
    UserService,
    LoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
