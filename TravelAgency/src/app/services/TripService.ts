import {IRestService} from "../interfaces/IRestService";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {HttpTripsService} from "./HttpTripsService";
import {CurrencyConverter} from "../tools/CurrencyConverter";

@Injectable({
  providedIn: 'root'
})
export class TripService
{
  trips: Trip[] = [];

  filteredTrips: Trip[] = [];

  constructor(tripsService: HttpTripsService) {
    // TODO : load data from firebase
    fetch("./assets/data/trips.json")
      .then(res => res.json())
      .then(json => {
        let tmp = json.trips

        for (let item in tmp) {
          let x = tmp[item] as Trip
          x.selected = 0
          this.trips.push(x)
          this.filteredTrips.push(x)
        }

        this.updateExtremes();

      })
  }

  getItems(): Array<Trip> {
    return this.filteredTrips;
  }

  getItem(id:number){
    return this.trips.find(trip => trip.id === id);
  }

  filterItems()
  {

  }

  addItem(trip:Trip)
  {
    this.trips.push(trip)
    this.filteredTrips.push(trip)
    this.filterItems()
    this.updateExtremes()
  }

  deleteItem(id:number) {
    this.filteredTrips = this.filteredTrips.filter(trip => trip.id !== id);
    this.trips = this.trips.filter(trip => trip.id !== id);
    this.updateExtremes()
  }

  updateExtremes() {
    this.trips.forEach( (trip) =>
    {
      trip.cheapestTrip = false;
      trip.theMostExpensiveTrip = false;
    });

    if(this.trips.length < 2)
      return;

    let converter = new CurrencyConverter();

    let extreme : Trip = this.trips
      .filter(a=> a.available != a.selected)
      .reduce((a,b) =>
        converter.convertMoneyToPlN(a.price,a.currency) < converter.convertMoneyToPlN(b.price, b.currency) ? a:b)
    extreme.cheapestTrip = true

    extreme = this.trips
      .filter(a=> a.available != a.selected && !a.cheapestTrip )
      .reduce((a,b) =>
        converter.convertMoneyToPlN(a.price, a.currency) > converter.convertMoneyToPlN(b.price, b.currency) ? a:b)

    if(extreme != null)
      extreme.theMostExpensiveTrip = true
  }

}
