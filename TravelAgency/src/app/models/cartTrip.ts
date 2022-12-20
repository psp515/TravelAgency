import {Trip} from "./trip";

export class CartTrip{
  id?: number;
  name?: string;
  country?: string;
  tripStart?: string;
  tripEnd?: string;
  price?: number;
  currency?: string;
  selected?: number;
  cheapestTrip?: boolean = false;
  theMostExpensiveTrip?: boolean= false;

  constructor(trip?: Trip)
  {
    this.id = trip?.id;
    this.name = trip?.name;
    this.country = trip?.country;
    this.tripStart = trip?.tripStart;
    this.tripEnd = trip?.tripEnd;
    this.price = trip?.price;
    this.currency = trip?.currency;
    this.selected = trip?.selected;
  }
}
