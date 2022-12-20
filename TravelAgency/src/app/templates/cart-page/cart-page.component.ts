import {Component, OnInit} from '@angular/core';
import {CartTrip} from "../../models/cartTrip";
import {TripService} from "../../services/TripService";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  selectedTrips : CartTrip[] = [];

  constructor(private tripService : TripService) {
  }

  ngOnInit(): void {
    this.selectedTrips = this.tripService.getItems().filter(x=>x.selected>0).map(x=> new CartTrip(x));
  }

  plus_clicked()
  {

  }

  minus_clicked(){

  }

  buy_trip_clicked(){

  }

  buy_all_clicked(){

  }
}
