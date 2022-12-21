import {Component, OnInit} from '@angular/core';
import {CartTrip} from "../../models/cartTrip";
import {TripService} from "../../services/TripService";
import {CurrencyConverter} from "../../tools/CurrencyConverter";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  selectedTrips : CartTrip[] = [];

  totalCost: number = 0;
  totalTrips: number = 0

  constructor(private tripService : TripService) {
  }

  ngOnInit(): void
  {
    this.selectedTrips = []
    this.selectedTrips = this.tripService.getItems().filter(x=>x.selected>0).map(x=> new CartTrip(x));

    this.totalTrips = this.selectedTrips.reduce((accumulator, trip) => {return accumulator + trip.selected;}, 0);
    let converter = new CurrencyConverter();
    this.totalCost = Math.round(100*this.selectedTrips.reduce((accumulator, trip) => {return accumulator +  trip.selected * converter.convertMoneyToPlN(trip.price, trip.currency);}, 0))/100
  }

  buyAllTrips(){


  }

}
