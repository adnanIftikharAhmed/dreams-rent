import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './user/signup/signup.component';
import { ProductDetailsComponent } from './screens/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    FooterComponent,
    SignupComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
