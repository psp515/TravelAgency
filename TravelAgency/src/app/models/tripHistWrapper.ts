import {TripHist} from "./TripHist";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TripHistWrapper{
  public isFisnished(hist: TripHist) : boolean
  {
    return Date.parse(hist.tripEnd) < new Date().getTime()
  }
  public isAwaiting(hist: TripHist) : boolean
  {
    return Date.parse(hist.tripStart) > new Date().getTime()
  }

  public state(hist: TripHist): string
  {

    if(this.isFisnished(hist))
      return "Finished"

    if(this.isAwaiting(hist))
      return "Awaiting"

    return "In Progress"
  }
}
