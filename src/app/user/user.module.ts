import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
