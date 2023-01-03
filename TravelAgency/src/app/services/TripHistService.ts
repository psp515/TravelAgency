import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Trip} from "../models/trip";
import {TripHist} from "../models/TripHist";
import {CurrencyService} from "./CurrencyService";
import {ServiceLocator} from "../locator.sevice";
import {Response} from "../models/response";


@Injectable({
  providedIn: 'root'
})
export class TripHistService
{
  trips : TripHist[] = [];

  constructor(private currencyService:CurrencyService) {

  }

  getUserHist() : TripHist[]
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

  addTripToHist(trip:Trip) : Response
  {
    //Adds to hist
    return new Response();
  }

  //Helpers

  public getTotalPrice(trip : TripHist) : number
  {
    return this.currencyService.convertToActualCurrency(trip.price*trip.boughtTrips, trip.currency)
  }
}
