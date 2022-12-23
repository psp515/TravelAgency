import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})
export class TriplistComponent implements OnInit {

  trips: Trip[] = [];

  selectedTrips: number = 0;

  constructor(public  tripService: TripService) {
    this.tripService = tripService
  }

  ngOnInit(){
    this.trips = this.tripService.getItems()
    this.refreshSelectedTrips("start");
  }

  refreshSelectedTrips($event: string){
    this.selectedTrips = this.trips.reduce((accumulator, trip) => {return accumulator + trip.selected;}, 0);
    this.tripService.updateExtremes();
  }

  refreshTrips(event: string){
    this.trips = this.tripService.getItems()
  }

}
