import {Component, OnInit} from '@angular/core';
import {TripHistService} from "../../services/TripHistService";
import {TripHist} from "../../models/TripHist";
import {CurrencyService} from "../../services/CurrencyService";
import {TripHistWrapper} from "../../models/tripHistWrapper";

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
              public currencyService: CurrencyService,
              public wrapper: TripHistWrapper)
  {
  }

  async ngOnInit(): Promise<void> {
     await this.tripHistService.getUserHist().forEach(list =>
     {
       for(let item of list){
         this.filteredHistTrips.push(item)
         this.histTrips.push(item)
       }
     })
  }

  filterTrips()
  {
    this.filteredHistTrips = this.histTrips.filter((trip) => {

      if (this.awaiting && this.wrapper.state(trip) == 'Awaiting')
        return true

      if (this.finished &&  this.wrapper.state(trip) == 'Finished')
        return true

      return this.inProgress &&  this.wrapper.state(trip)  == 'In Progress';
    })
  }
}
