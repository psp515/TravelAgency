import {CurrencyService} from "../services/CurrencyService";
import {ServiceLocator} from "../locator.sevice";

export class TripHist
{
  public isFisnished() : boolean
  {
    return Date.parse(this.tripEnd) < new Date().getTime()
  }
  public isAwaiting() : boolean
  {
    return Date.parse(this.tripStart) > new Date().getTime()
  }

  public state(): string
  {
    if(this.isFisnished())
      return "Finished"

    if(this.isAwaiting())
      return "Awaiting"

    return "In Progress"
  }

  constructor(public id: number = -1,
              public userId:number = 0,
              public tripId:number = 0,
              public country: string = "",
              public tripStart: string = "",
              public tripEnd: string = "",
              public price: number = 0,
              public currency: string = "",
              public boughtTrips: number = 0)
  {
  }

}
