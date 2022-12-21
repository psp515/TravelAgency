import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/ReviewService";
import {Review} from "../../models/Review";

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  trip : Trip;
  reviews : Review[] = [];
  private routeSub?: Subscription;

  constructor(private tripService: TripService, private route: ActivatedRoute, private reviewService : ReviewService) {
    this.trip = new Trip();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(async params => {
      let id = params['id'];
      this.trip = this.tripService.getItem(id)!;
      console.log(id)
      this.reviews = await this.reviewService.getTripReviews(id)
      console.log(this.reviews)
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  async refreshReviews(data:string)
  {
    //TODO
    //this.reviews = await this.reviewService.getTripReviews(this.trip.id);
  }

  nextPhoto() {}

  previousPhoto() {}

}
