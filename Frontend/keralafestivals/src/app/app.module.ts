import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddeventComponent } from './addevent/addevent.component';
import { TestComponent } from './test/test.component';
import { AlleventsComponent } from './allevents/allevents.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { VSeventComponent } from './vsevent/vsevent.component';
import { EditeventComponent } from './editevent/editevent.component';
import { RecenteventsComponent } from './recentevents/recentevents.component';
import { MgviewlleventsComponent } from './mgviewllevents/mgviewllevents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrendingvideosComponent } from './trendingvideos/trendingvideos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ExpiredeventsComponent } from './expiredevents/expiredevents.component';
import { SubscribeduserComponent } from './subscribeduser/subscribeduser.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddeventComponent,
    TestComponent,
    AlleventsComponent,
    VSeventComponent,
    EditeventComponent,
    RecenteventsComponent,
    MgviewlleventsComponent,
    NavbarComponent,
    TrendingvideosComponent,
    AboutComponent,
    ExpiredeventsComponent,
    SubscribeduserComponent,
    BookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
