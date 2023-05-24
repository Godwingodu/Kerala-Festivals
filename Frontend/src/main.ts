import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  // window.location.reload()
  // location.reload()
  var nave = localStorage.getItem("main")
  if (nave != "navbar") {
    location.reload()
  }
  localStorage.setItem('main','navbar')

  setTimeout(() => {
    localStorage.removeItem('main')
  }, 50400);
