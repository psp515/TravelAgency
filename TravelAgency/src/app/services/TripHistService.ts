import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Trip} from "../models/trip";
import {TripHist} from "../models/TripHist";
import {CurrencyService} from "./CurrencyService";


@Injectable({
  providedIn: 'root'
})
export class TripHistService
{
  trips : TripHist[] = [];

  //http: HttpClient
  constructor() {


  }

  getUserHist(id:number) : TripHist[]
  {
    let trips : TripHist[] = []

    let data = fetch("./assets/data/tripsHist.json")
      .then(res => res.json())
      .then(json => {
        let tmp = json.trips
        for (let item in tmp)
        {
          let x = tmp[item] as TripHist
          trips.push(new TripHist(x.id,
            x.userId,
            x.tripId,
            x.country,
            x.tripStart,
            x.tripEnd,
            x.price,
            x.currency,
            x.boughtTrips))
        }
      });

    return trips;
  }

  addTrip(trip:Trip, id:number)
  {
    //Adds to hist
  }
}
