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
  private nextId: number | undefined;


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

  removeItem(trip:Trip){
    this.db.list('trips').snapshotChanges().pipe(first()).subscribe((items:any) =>{
      for(let i of items)
        if(i.payload.val().id==trip.id)
          this.db.list('trips').remove(i.payload.key)
    } )
  }

  updateItem(trip:Trip)
  {
    this.db.list('trips').snapshotChanges().pipe(first()).subscribe((items:any) =>{
      for(let i of items)
        if(i.payload.val().id==trip.id)
          this.db.list('trips').update(i.payload.key, trip)
    } )
  }

}
