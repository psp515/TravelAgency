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
  }

  async ngOnInit() {
    await this.tripService.refreshItems();
  }

  refreshSelectedTrips($event: string){
    this.tripService.updateBarData();
    this.tripService.updateExtremes();
  }

  refreshTrips(event: string){
    this.trips = this.tripService.getItems()
  }
}
