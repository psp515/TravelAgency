import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {IRestService} from "../interfaces/IRestService";

@Injectable({
  providedIn: 'root'
})
export class HttpTripsService implements IRestService<Trip>
{
  addItem(item: Trip): void {
  }

  deleteItem(id: number): void {
  }

  getItem(id: number): Trip {
    return new Trip();
  }

  async getItems(): Promise<Array<Trip>> {
    let trips : Array<Trip> = []

    let data = fetch("./assets/data/trips.json")
      .then(res => res.json())
      .then(json => {
        let tmp = json.trips
        for (let item in tmp)
        {
          let x = tmp[item] as Trip
          x.selected = 0
          trips.push(x)
        }
      });

    console.log(trips)
    return trips;
  }

  updateItem(item: Trip): void {
  }

}
