// import { Component } from '@angular/core';
// import { LogINService } from 'src/app/services/log-in.service';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css']
// })
// export class SignInComponent {
//   loginObj: any ={
//     "identifier":"",
//     "password":""
//   }
//   constructor(private loginSrv: LogINService){

//   }
//   onLogin(){
//     this.loginSrv.login(this.loginObj).subscribe((res: any)=>{
//       if(res.status){
//         console.log("Failed", status)
//       }
//       else{
//         console.log(res.message)
//       }
//     })
//   }
// }
import { Component } from '@angular/core';
import { LogINService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';  // Import Router

interface LoginData {
  identifier: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginObj: LoginData = {
    identifier: "",
    password: ""
  };
  errorMessage?: string;  // To display error messages to the user

  constructor(public loginSrv: LogINService, private router: Router) { }

  onLogin() {
    this.loginSrv.login(this.loginObj).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.jwt);  // Store the JWT token
        // localStorage.setItem('user', JSON.stringify(res.user));  // Optionally store user data

        this.router.navigate(['/homepage']);  // Navigate to homepage upon successful login
      },
      error => {
        // Display a user-friendly error message
        this.errorMessage = 'Invalid credentials';
        // Debug: Log the detailed error for developers
        console.log("Login error:", error.error.message || "An error occurred");
      }
    );
  }
}