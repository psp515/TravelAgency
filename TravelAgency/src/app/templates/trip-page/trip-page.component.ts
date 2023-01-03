import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/ReviewService";
import {Review} from "../../models/Review";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class TripPageComponent implements OnInit {

  trip : Trip = new Trip();
  reviews : Review[] = [];
  private routeSub?: Subscription;

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private reviewService : ReviewService,
              config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  /*
  *  <ngb-carousel *ngIf="trip.urls">
      <div *ngFor="let image of trip.urls">
        <ng-template ngbSlide>
          <div class="picsum-img-wrapper">
            <img [src]="image" alt="Random Img" />
          </div>
        </ng-template>
      </div>
    </ngb-carousel>
    * */

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(async params => {
      let id = params['id'];

      let trip = this.tripService.getItem(id)
      if(trip != null)
        this.trip = trip;

      console.log(this.trip)

      this.reviews = await this.reviewService.getTripReviews(id)
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

}
