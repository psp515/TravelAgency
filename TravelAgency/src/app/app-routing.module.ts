import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriplistComponent } from './templates/triplist/triplist.component';


const routes: Routes = [
  {
    path: 'trips' , component: TriplistComponent
  },
  {path: 'trips/:id' , component: TriplistComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
