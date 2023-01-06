import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {CurrencyService} from "../../services/CurrencyService";
import {Trip} from "../../models/trip";
import {TripHistService} from "../../services/TripHistService";
import {TripHist} from "../../models/TripHist";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  selectedTrips : Trip[] = [];

  totalCost: number = 0;
  totalTrips: number = 0

  constructor(public tripService : TripService,
              public currencyService: CurrencyService,
              private histService : TripHistService) {
  }

  ngOnInit(): void
  {
    this.selectedTrips = []
    this.selectedTrips = this.tripService.getAllItems().filter(x=>x.selected>0);

    this.totalTrips =
      this.selectedTrips.reduce((accumulator, trip) => {
        return accumulator + trip.selected;
        }, 0);

    this.totalCost =
      Math.round(100*this.selectedTrips.reduce((accumulator, trip) =>
      {
        return accumulator + this.tripService.calculateTrip(trip);
        }, 0))/100
  }

  async buyAllTrips() {
    let errors = "";
    for (let trip of this.selectedTrips) {
      try {

        let triphist = new TripHist("",
          '',
          trip.key,
          trip.country,
          trip.tripStart,
          trip.tripEnd,
          trip.price * trip.selected,
          trip.currency,
          trip.selected)

        let response = await this.histService.addTripToHist(triphist);

        if (response.IsSuccesfull) {
          this.tripService.tripBought(trip.key, trip.selected)
          this.removeTripFromList(trip.key)
        } else
          errors += response.ErrorMessage;
      } catch (Exception) {
      }
    }

    this.tripService.updateBarData()

    if (errors == "")
      return

    alert(errors)
  }

  removeTripFromList(id: string) {
    this.selectedTrips = this.selectedTrips.filter((x)=> x.key != id)
  }
}
