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
import { CartPageComponent } from './templates/cart-page/cart-page.component';
import { TripPageComponent } from './templates/trip-page/trip-page.component';
import { TripGradeComponent } from './components/trip-grade/trip-grade.component';
import { TripReviewComponent } from './components/trip-review/trip-review.component';
import { DisplayreviewComponent } from './Molecules/displayreview/displayreview.component';
import { DisplaySelectedTripComponent } from './Molecules/display-selected-trip/display-selected-trip.component';
import { TripsFilterComponent } from './components/trips-filter/trips-filter.component';
import { MainPageComponent } from './templates/main-page/main-page.component';
import { TripHistComponent } from './templates/trip-hist/trip-hist.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    TripComponent,
    NavbarComponent,
    CartComponent,
    AddtripComponent,
    CartPageComponent,
    TripPageComponent,
    TripGradeComponent,
    TripReviewComponent,
    DisplayreviewComponent,
    DisplaySelectedTripComponent,
    TripsFilterComponent,
    MainPageComponent,
    TripHistComponent,
    UserHeaderComponent
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
