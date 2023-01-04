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

  trip : Trip = new Trip();
  reviews : Review[] = [];
  private routeSub?: Subscription;

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private reviewService : ReviewService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(async params => {
      let id = params['id'];

      let trip = this.tripService.getItem(id)
      if(trip != null)
        this.trip = trip;

      console.log(this.trip)

      this.reviews = await this.reviewService.getTripReviews(id)
    });


    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }

  }

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
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
