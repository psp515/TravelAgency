import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriplistComponent } from './templates/triplist/triplist.component';
import {AddtripComponent} from "./templates/addtrip/addtrip.component";
import {CartPageComponent} from "./templates/cart-page/cart-page.component";
import {TripPageComponent} from "./templates/trip-page/trip-page.component";


const routes: Routes = [
  {path: 'trips' , component: TriplistComponent},
  {path: 'trip/:id' , component: TripPageComponent},
  {path: 'addtrip' , component: AddtripComponent},
  {path: 'cart' , component: CartPageComponent},
  {path: '' , component: TriplistComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
