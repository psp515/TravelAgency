import {CurrencyService} from "../services/CurrencyService";
import {ServiceLocator} from "../locator.sevice";

export class TripHist
{


  constructor(public key: string = '',
              public userId:string = '',
              public tripId:string = '',
              public country: string = "",
              public tripStart: string = "",
              public tripEnd: string = "",
              public price: number = 0,
              public currency: string = "",
              public boughtTrips: number = 0)
  {
  }

}
