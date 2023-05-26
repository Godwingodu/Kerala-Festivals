import { Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor()
  {
    var nave = localStorage.getItem("home")
    if (nave != "values") {
      location.reload()
    }
    localStorage.setItem('home','values')

    setTimeout(() => {
      localStorage.removeItem('home')
    }, 300);

  }
}