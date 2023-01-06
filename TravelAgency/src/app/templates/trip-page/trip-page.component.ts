import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/ReviewService";
import {Review} from "../../models/Review";
import {Router} from "@angular/router";
import {CurrencyService} from "../../services/CurrencyService";

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  trip : Trip = new Trip();
  reviews : Review[] = [];
  private routeSub?: Subscription;

  constructor(public tripService: TripService,
              public currencyService:CurrencyService,
              private route: ActivatedRoute,
              private reviewService : ReviewService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(async params => {
      let id = params['id'];

      let trip = this.tripService.getItem(id)
      if(trip != null)
        this.trip = trip;

      await this.reviewService.getTripReviews(id).forEach(list=>
      {
        for (let item of list)
          if(this.reviews.filter(x=>x.key==item.key).length==0)
            this.reviews.push(item)
      })
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  async refreshReviews(data:Review)
  {
    this.reviews.push(data)
  }

  async goBack() {
    await this.router.navigate(['/trips']);
  }

  getStars(){
    if (this.reviews.length == 0)
      return 0;

    let sum = 0;

    // TS IS FUCKED -> CODE BELOW WITHOUT * 1 WAS
    // CREATING A STRING EXAMPLE:
    // GRADES 4 5 GIVE SUM 045 WTF

    for(let i in this.reviews)
      sum = sum + parseInt(this.reviews[i].grade.toString())

    return sum / this.reviews.length;
  }

  minusClicked() {

    if(this.trip.selected == 0)
    {
      alert("Minimalna liczba miejsc.");
      return;
    }

    this.trip.selected-=1;
    this.tripService.updateBarData();
  }

  plusClicked() {
    if(this.trip.selected == this.trip.available)
    {
      alert("Maksymalna liczba miejsc.");
      return;
    }

    this.trip.selected+=1;
    this.tripService.updateBarData();
  }

  async goToCart() {
    await this.router.navigate(['/cart']);
  }
}
