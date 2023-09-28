import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the current URL path
        if (event.urlAfterRedirects === '/signin' || event.urlAfterRedirects === '/signup' ||event.urlAfterRedirects === '/forgotpassword') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
