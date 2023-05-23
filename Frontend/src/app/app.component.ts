import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  
  isAuthenticated: boolean = false;
  title = 'keralafestivals';

  constructor(private r:Router,private renderer: Renderer2)
  {
  }

  ngOnInit():
  void {
    this.checkAuthStatus();

var something = (function() {

    var executed = false;

    return function() {

        if (!executed) {

            executed = true;

            alert("hi")

        }

    };

})();

    setTimeout(() => {
      if (localStorage.getItem("token")) {
        
        if (confirm("Do you want to add Event")) {
          this.r.navigate(["addevent"])
        } else {
          alert("Thanks for visiting the page")
        }
      }
      else {
        if (confirm("Do you want to add Event")) {
          this.r.navigate(["login"])
        } else {
          alert("Thanks for visiting the page")
        }
      }

    }, 60000);
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '/assets/js/navbar.js';
    this.renderer.appendChild(document.body, script);

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
