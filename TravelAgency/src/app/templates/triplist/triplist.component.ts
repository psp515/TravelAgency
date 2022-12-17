import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})
export class TriplistComponent {

  trips: any[] = [];

  constructor(private tripService: TripService) {

    fetch("./assets/data/trips.json")
      .then(res => res.json())
      .then(json =>
      {
        this.trips = json.trips
        console.log(this.trips)
      })
  }

}
