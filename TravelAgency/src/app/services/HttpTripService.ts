import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {first, map, Observable} from "rxjs";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpTripService{

  tripsRef: AngularFireList<any>;
  trips: Observable<Trip[]>;

  constructor(private db: AngularFireDatabase) {
    this.tripsRef = db.list('trips');
    this.trips = this.tripsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    )
  }

  getItems()
  {
    return this.trips
  }

  addItem(trip:Trip)
  {
    try
    {
      this.tripsRef.push(trip);
    }
    catch (Exception)
    {
      console.log("Błąd dodawania")
    }
  }

  async removeItem(id:string){
    try
    {
      await this.tripsRef.remove(id);
    }
    catch (Exception)
    {
      console.log("Błąd usuwania")
    }
  }

  async updateItem(trip: Trip) {
    try {
      await this.tripsRef.update(trip.key, trip);
    } catch (Exception) {
      console.log("Błąd updatowanie")
    }
  }

}
