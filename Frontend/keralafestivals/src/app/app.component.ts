import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  title = 'keralafestivals';

  constructor(private r:Router)
  {

  }

  ngOnInit():
  void {
    this.checkAuthStatus();

    // setTimeout(() => {
    //   if (localStorage.getItem("token")) {
        
    //     if (confirm("Do you want to add Event")) {
    //       this.r.navigate(["addevent"])
    //     } else {
    //       alert("Thanks for visiting the page")
    //     }
    //   }
    //   else {
    //     if (confirm("Do you want to add Event")) {
    //       this.r.navigate(["login"])
    //     } else {
    //       alert("Thanks for visiting the page")
    //     }
    //   }

    // }, 30000);
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
