import {Component, Input} from '@angular/core';
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  @Input() trip: Trip

  constructor() {
    this.trip = new Trip();
  }

}
