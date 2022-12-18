import {BehaviorSubject, Subject} from "rxjs";
import {Trip} from "../models/trip";

export class SharedTripsService
{
  constructor(){}
  public editDataDetails: any = [];

  public subject = new Subject<any>();

  private messageSource = new  BehaviorSubject(this.editDataDetails);

  currentMessage = this.messageSource.asObservable();

  changeMessage(updated: Trip)
  {
    this.messageSource.next(updated)
  }

}
