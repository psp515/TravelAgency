import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {CurrencyService} from "../../services/CurrencyService";
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  selectedTrips : Trip[] = [];

  totalCost: number = 0;
  totalTrips: number = 0

  constructor(private tripService : TripService, public currencyService: CurrencyService) {
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

  buyAllTrips(){


  }

}
