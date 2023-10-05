import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { FooterComponent } from './nav/footer/footer.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path : 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'homepage',
    component: HomePageComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
