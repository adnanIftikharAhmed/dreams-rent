import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from '../header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ScreensModule { }
