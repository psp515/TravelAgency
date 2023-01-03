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

  awaiting = true;
  finished = true;
  inProgress = true;

  constructor(public tripHistService: TripHistService,
              public currencyService: CurrencyService)
  {
  }

  ngOnInit(): void {
    this.histTrips = this.tripHistService.getUserHist()
    this.filteredHistTrips = this.tripHistService.getUserHist()
  }

  filterTrips()
  {
    this.filteredHistTrips = this.histTrips.filter((trip) => {

      if (this.awaiting && trip.state() == 'Awaiting')
        return true

      if (this.finished && trip.state() == 'Finished')
        return true

      return this.inProgress && trip.state() == 'In Progress';
    })
  }
}
