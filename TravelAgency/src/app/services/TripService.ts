import {IRestService} from "../interfaces/IRestService";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TripService implements IRestService<Trip>
{
  trips: Trip[] = [];

  constructor() {
    fetch("./assets/data/trips.json")
      .then(res => res.json())
      .then(json =>
      {
        let tmp = json.trips

        for (let item in tmp) {
          let x = tmp[item] as Trip
          x.selected = 0
          this.trips.push(x)
        }

      })
  }

  addItem(item: Trip): void {
    this.trips.push(item)
  }

  deleteItem(id: number): void {
    this.trips = this.trips.filter(item => item.id !== id);
  }

  getItem(id: number): Trip {
    return this.trips.filter(item => item.id === id)[0];
  }

  getItems(): Array<Trip>
  {
    return this.trips;
  }

  updateItem(newitem: Trip): void {
    this.trips = this.trips.filter(item => item.id !== newitem.id);
    this.trips.push(newitem)
  }

}
