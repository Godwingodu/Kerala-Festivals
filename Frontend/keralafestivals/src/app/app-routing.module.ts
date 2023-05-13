import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddeventComponent } from './addevent/addevent.component';
import { TestComponent } from './test/test.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { VSeventComponent } from './vsevent/vsevent.component';
import { EditeventComponent } from './editevent/editevent.component';
import { RecenteventsComponent } from './recentevents/recentevents.component';
import { MgviewlleventsComponent } from './mgviewllevents/mgviewllevents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingvideosComponent } from './trendingvideos/trendingvideos.component';
import { AboutComponent } from './about/about.component';
import { ExpiredeventsComponent } from './expiredevents/expiredevents.component';
import { SubscribeduserComponent } from './subscribeduser/subscribeduser.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: 'subscribeduser', component: SubscribeduserComponent },
  { path: 'expiredevents', component: ExpiredeventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trendingvideos', component: TrendingvideosComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'mgviewallevents', component: MgviewlleventsComponent },
  { path: 'recentevents', component: RecenteventsComponent },
  { path: 'editevent/:id', component: EditeventComponent },
  { path: 'VSevent/:id', component: VSeventComponent },
  { path: 'allevents', component: AlleventsComponent },
  { path: 'test', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addevent', component: AddeventComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
