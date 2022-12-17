import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TriplistComponent } from './templates/triplist/triplist.component';
import { TripComponent } from './components/trip/trip.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';

import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { TripbuttonComponent } from './components/tripbutton/tripbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    TripComponent,
    AddtripComponent,
    NavbarComponent,
    CartComponent,
    TripbuttonComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
