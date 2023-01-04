import {AngularFireDatabase} from "@angular/fire/compat/database";
import {first, Observable} from "rxjs";
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpTripService{

  trips: Observable<any[]>;
  private nextId: number | undefined;

  constructor(private db: AngularFireDatabase) {
    this.trips = this.db.list('trips').valueChanges();
  }

  getItems()
  {
    return this.trips
  }

  addItem(trip:Trip)
  {
    const daneRef = this.db.list('trips');
    daneRef.push({  id : trip.id,
      name : trip.name,
      country : trip.country,
      tripStart : trip.tripStart,
      tripEnd : trip.tripEnd,
      price : trip.price,
      description : trip.description,
      image : trip.image,
      currency : trip.currency,
      likes : trip.likes,
      available : trip.available,
      shortDescription : trip.shortDescription,
      selected : trip.selected,
      stars : trip.stars,
      urls:trip.urls});
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
