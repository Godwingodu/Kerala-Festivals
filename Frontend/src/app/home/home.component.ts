import { Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor()
  {
    var nave = localStorage.getItem("register")
    if (nave != "navbar") {
      location.reload()
    }
    localStorage.setItem('register','navbar')

    setTimeout(() => {
      localStorage.removeItem('register')
    }, 300);

  }
}