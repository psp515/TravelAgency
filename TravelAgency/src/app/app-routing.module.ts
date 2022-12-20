import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriplistComponent } from './templates/triplist/triplist.component';
import {AddtripComponent} from "./templates/addtrip/addtrip.component";
import {CartPageComponent} from "./templates/cart-page/cart-page.component";


const routes: Routes = [
  {path: 'trips' , component: TriplistComponent},
  {path: 'trips/:id' , component: TriplistComponent},
  {path: 'addtrip' , component: AddtripComponent},
  {path: 'cart' , component: CartPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
