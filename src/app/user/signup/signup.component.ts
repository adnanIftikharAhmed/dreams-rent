import { Component } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerObj = {
    username: '',
    email: '',
    password: ''
  };
  constructor(public registerSrv: RegistrationService){
 
  }
  onRegister(){
    this.registerSrv.register(this.registerObj).subscribe((res: any)=>{
      if(res.status){
        alert("Failed ")
      }
      else{
        alert(res.message)
      }
    })
  }
}
