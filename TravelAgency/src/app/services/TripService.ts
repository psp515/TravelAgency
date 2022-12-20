import {IRestService} from "../interfaces/IRestService";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {HttpTripsService} from "./HttpTripsService";

@Injectable({
  providedIn: 'root'
})
export class TripService
{
  trips: Trip[] = [];

  filteredTrips: Trip[] = [];

  constructor(tripsService: HttpTripsService) {

  }

  getItems(): Array<Trip> {
    if (this.filteredTrips.length == 0)
    {
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

    return this.filteredTrips;
  }

  filterItems()
  {

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

    let extreme : Trip = this.trips.reduce((a,b)=> a.price > b.price ? b:a)
    extreme.cheapestTrip = true

    extreme = this.trips.reduce((a,b)=> a.price > b.price ? a:b)
    extreme.theMostExpensiveTrip = true
  }

}
