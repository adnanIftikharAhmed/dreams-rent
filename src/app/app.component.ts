// import { Component } from '@angular/core';
// import { UsersDataService } from './services/users-data.service';
// import { RegistrationService } from './services/registration.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'rentalCars';
//   registerObj: any = {
//     "username" : "",
//     "email" : "",
//     "password" : ""
//   }
// constructor(private registerSrv: RegistrationService){
 
// }
//   onRegister(){
//     this.registerSrv.register(this.registerObj).subscribe((res: any)=>{
//       if(res.status){
//         alert("Failed ")
//       }
//       else{
//         alert(res.message)
//       }
//     })
//   }
// }
import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { RegistrationService } from './services/registration.service';
import { Router, NavigationEnd } from '@angular/router';  // <-- Import Router here
import { filter } from 'rxjs/operators';  // <-- Import filter here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayFooter = true;
  title = 'rentalCars';
  registerObj: any = {
    "username": "",
    "email": "",
    "password": ""
  }

  // Merged constructor
  constructor(private router: Router, private registerSrv: RegistrationService) {
    // Logic for router events
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd)=>{
      if (event.url === '/signin' || event.url === '/signup' || event.url === '/forgotpassword') {
        this.displayFooter = false;
      } else {
        this.displayFooter = true;
      }
    });
  }

  onRegister() {
    this.registerSrv.register(this.registerObj).subscribe((res: any) => {
      if (res.status) {
        alert("Failed ")
      } else {
        alert(res.message)
      }
    })
  }
}
