import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {IRestService} from "../interfaces/IRestService";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class HttpTripsService implements IRestService<Trip>
{
  constructor(private db: AngularFirestore) {

  }

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

          console.log(x)

          x.selected = 0
          trips.push(x)
        }
      });
    return trips;
  }

  

  updateItem(item: Trip): void {
  }

}
