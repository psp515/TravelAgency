import {Review} from "../models/Review";
import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService{

  reviewsRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {

  }



  getTripReviews(key:string) : Observable<Review[]>{

    this.reviewsRef = this.db.list('reviews/' + key);

    return this.reviewsRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }

  async addTripReview(review: Review) {
    try {
      this.reviewsRef = this.db.list('reviews/' + review.tripId);
      review.key = new Date().getTime().toString()
      await this.reviewsRef.set(review.key, review)
    } catch (Exception) {
      console.log("Błąd dodawania recęzji.")
    }
  }

}


