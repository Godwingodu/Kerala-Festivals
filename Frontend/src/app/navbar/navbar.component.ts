import { Component,Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private renderer: Renderer2)
  {

  }

  ngOnInit():
  void {
    this.checkAuthStatus();
    // const script = this.renderer.createElement('script');
    // script.type = 'text/javascript';
    // script.src = '/assets/js/navbar.js';
    // this.renderer.appendChild(document.body, script);
  }

  checkAuthStatus() {
    // Check if the user is authenticated
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  logout()
  {
    localStorage.removeItem('token')
    location.assign("");
  }
}

