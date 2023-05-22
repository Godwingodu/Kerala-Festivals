import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {  
     if (!localStorage.getItem('foo')) { 
    localStorage.setItem('foo', 'no reload') 
    location.reload() 
  } else {
    localStorage.removeItem('foo') 
  }
  }
}
