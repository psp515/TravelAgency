import {Component, OnInit} from '@angular/core';
import {TripHistService} from "../../services/TripHistService";
import {TripHist} from "../../models/TripHist";
import {CurrencyService} from "../../services/CurrencyService";

@Component({
  selector: 'app-trip-hist',
  templateUrl: './trip-hist.component.html',
  styleUrls: ['./trip-hist.component.css']
})
export class TripHistComponent implements OnInit {

  histTrips: TripHist[] = []

  filteredHistTrips : TripHist[] = []

  public awaiting : boolean = true;
  public finished : boolean = true;
  public inProgress : boolean = true;

  constructor(private tripHistService: TripHistService, public currency: CurrencyService)
  {
  }

  ngOnInit(): void {
    this.histTrips = this.tripHistService.getUserHist(0)
    this.filteredHistTrips = this.tripHistService.getUserHist(0)

    this.awaiting = true;
    this.finished  = true;
    this.inProgress = true;
  }

  filterTrips()
  {
    this.filteredHistTrips = this.histTrips.filter((trip)=> (this.awaiting && trip.state() == "Awaiting")
      || (this.finished && trip.state() == "Finished")
      || (this.inProgress && trip.state() == "In Progress"))
  }
}
