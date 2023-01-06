import {Injectable} from "@angular/core";
import {Trip} from "../models/trip";
import {TripHist} from "../models/TripHist";
import {CurrencyService} from "./CurrencyService";
import {Response} from "../models/response";
import {UserService} from "./UserService";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {Review} from "../models/Review";


@Injectable({
  providedIn: 'root'
})
export class TripHistService
{

  histTripsRef!: AngularFireList<any>;

  constructor(private currencyService:CurrencyService,
              private db: AngularFireDatabase,
              private userService:UserService) {

  }


  getUserHist() : Observable<TripHist[]>
  {
    this.histTripsRef = this.db.list('hist/' + this.userService.currentUserId);

    return this.histTripsRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }

  addTripToHist(hist: TripHist) : Response
  {
    try{
      this.histTripsRef = this.db.list('hist/' + this.userService.currentUserId);
      this.histTripsRef.push(hist)

      return new Response()
    }
    catch (error){
      return new Response(false);
    }
  }

  //Helpers

  public getTotalPrice(trip : TripHist) : number
  {
    return this.currencyService.convertToActualCurrency(trip.price*trip.boughtTrips, trip.currency)
  }
}
