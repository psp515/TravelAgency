import {Trip} from "./trip";

export class CartTrip{
  id: number = -1;
  name: string = '';
  country: string = '';
  tripStart: string = '';
  tripEnd: string = '';
  price: number = 0;
  currency: string = '';
  selected: number = 0;

  constructor(trip: Trip)
  {
    this.id = trip.id;
    this.name = trip.name;
    this.country = trip.country;
    this.tripStart = trip.tripStart;
    this.tripEnd = trip.tripEnd;
    this.price = trip.price;
    this.currency = trip.currency;
    this.selected = trip.selected;
  }
}
