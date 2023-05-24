import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {  
    var nave = localStorage.getItem("about")
    if (nave != "navbar") {
      location.reload()
    }
    localStorage.setItem('about','navbar')

    setTimeout(() => {
      localStorage.removeItem('about')
    }, 300);

  }
}
