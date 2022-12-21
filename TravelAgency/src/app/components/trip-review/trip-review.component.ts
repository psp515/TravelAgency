import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trip} from "../../models/trip";
import {ReviewService} from "../../services/ReviewService";
import {Review} from "../../models/Review";

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.css']
})
export class TripReviewComponent implements OnInit
{
  @Input() trip?:Trip;
  @Output() refreshReviews = new EventEmitter<string>();

  review : Review = new Review("", 0, 0, 0, 0);

  constructor(private reviewService: ReviewService) {

  }

  ngOnInit(): void {
    this.review = new Review("", new Date().getMilliseconds(), 3, -1, this.trip?.id!);
  }

  addReview()
  {
    this.review = new Review("", new Date().getMilliseconds(), 3, -1, this.trip?.id!);
    console.log(this.review)
    this.review.review = ''
    this.reviewService.addTripReview(this.review!);
    this.refreshReviews.emit('refreshReviews');
  }

}
