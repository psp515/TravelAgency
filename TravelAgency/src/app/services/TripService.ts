import {IRestService} from "../interfaces/IRestService";
import {Trip} from "../models/trip";
import {NONE_TYPE} from "@angular/compiler";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TripService implements IRestService<Trip>
{
  trips: Trip[] = [];

  addItem(item: Trip): void {
  }

  deleteItem(id: number): void {
  }

  getItem(id: number): Trip {
    return this.trips[0];
  }

  getItems(): Array<Trip>
  {
    return this.trips;
  }

  updateItem(item: Trip): void {
  }

}
