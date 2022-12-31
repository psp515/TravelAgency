import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriplistComponent } from './templates/triplist/triplist.component';
import {AddtripComponent} from "./templates/addtrip/addtrip.component";
import {CartPageComponent} from "./templates/cart-page/cart-page.component";
import {TripPageComponent} from "./templates/trip-page/trip-page.component";
import {MainPageComponent} from "./templates/main-page/main-page.component";
import {TripHistComponent} from "./templates/trip-hist/trip-hist.component";


const routes: Routes = [

  {path: 'trips' , component: TriplistComponent},
  {path: 'trip/:id' , component: TripPageComponent},
  {path: 'addtrip' , component: AddtripComponent},
  {path: 'hist' , component: TripHistComponent},
  {path: 'cart' , component: CartPageComponent},
  {path: '' , component: MainPageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
