import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TriplistComponent } from './templates/triplist/triplist.component';
import { TripComponent } from './components/trip/trip.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';

@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    TripComponent,
    AddtripComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
