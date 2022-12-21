import {Component, Input} from '@angular/core';
import {CartTrip} from "../../models/cartTrip";
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-display-selected-trip',
  templateUrl: './display-selected-trip.component.html',
  styleUrls: ['./display-selected-trip.component.css']
})
export class DisplaySelectedTripComponent
{
  @Input() cartTrip: CartTrip = new CartTrip(new Trip());

  constructor() {

  }

  plusClicked(){

  }

  minusClicked(){

  }

  buyTrip(){

  }

}
