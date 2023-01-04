import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Trip} from "../../models/trip";
import {ReviewService} from "../../services/ReviewService";
import {Review} from "../../models/Review";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.css']
})
export class TripReviewComponent implements OnInit
{
  @Input() trip:Trip;
  @Output() refreshReviews = new EventEmitter<Review>();
  @ViewChild('tripForm', {static: false})
  tripForm: NgForm | undefined;
  review : Review;
  defaultValue: string = '';

  errors:string[]=[]

  constructor(private reviewService: ReviewService) {
    this.review = new Review(new Date().getMilliseconds(), "", "", 0, "", 2, "");
    this.trip = new Trip();
  }

  ngOnInit(): void {
    this.review.tripId = this.trip.id;
    this.review.tripName = this.trip.name;
  }

  Validate()
  {
    let errors = 0
    this.errors = []

    if(this.review.username.length < 3 || this.review.username.length > 50) {
      this.errors.push("Username should be longer than 3 characters and lower than 50 characters.")
      errors+=1;
    }

    if(this.review.review.length < 50 || this.review.review.length > 500) {
      this.errors.push("Review should be longer than 50 characters and lower than 500 characters.")
      errors+=1;
    }

    return errors == 0;
  }

  addReview()
  {

    if(!this.Validate())
      return;

    let copy = new Review(new Date().getMilliseconds(),
      this.review.username,
      this.trip.name,
      this.review.tripId,
      this.review.review,
      this.review.grade,
      this.review.tripDate)

    this.review = new Review(new Date().getMilliseconds(), "", "", 0, "", 2, "")
    this.tripForm!.reset();
    this.review.review = "";
    this.reviewService.addTripReview(copy);
    this.refreshReviews.emit(copy);
  }

  doOnChangeText(event: Event) {
    try {
      // @ts-ignore
      this.review.review = event.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  changeGrade(event: number) {
    this.review.grade = event;
  }
}
