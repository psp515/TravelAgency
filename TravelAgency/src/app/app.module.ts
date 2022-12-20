import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TriplistComponent } from './templates/triplist/triplist.component';
import { TripComponent } from './components/trip/trip.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';

import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AddtripComponent} from "./templates/addtrip/addtrip.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    TripComponent,
    NavbarComponent,
    CartComponent,
    AddtripComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
