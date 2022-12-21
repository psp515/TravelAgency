import {Review} from "../models/Review";
import {TripService} from "./TripService";
import {Injectable} from "@angular/core";

// po dodaniu review to działa tak że autoamtycznie updatowyany jest odpowiedni trip.

@Injectable({
  providedIn: 'root'
})
export class ReviewService{

  constructor(private tripsService: TripService) {

  }

  async getTripReviews(id:number){
    let review: Review[] = []

    await fetch("./assets/data/reviews.json")
      .then(res => res.json())
      .then(json => {
          review = json.reviews.filter((x: Review) => x.tripId == id)
        })

    return review
  }

  addTripReview(review:Review){
    //TODO
    //TODO : update TripsService Collection
  }

}


