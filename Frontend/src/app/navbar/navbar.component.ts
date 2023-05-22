import { Component,Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private renderer: Renderer2,private r:Router)
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
  navigate(to:any)
   {
    this.r.navigate([to]);
    // window.location.reload()
  }

}

