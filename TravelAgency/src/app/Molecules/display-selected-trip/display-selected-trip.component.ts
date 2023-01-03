import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../models/trip";
import {TripService} from "../../services/TripService";
import {TripHistService} from "../../services/TripHistService";
import {CurrencyService} from "../../services/CurrencyService";
import {single} from "rxjs";

@Component({
  selector: 'app-display-selected-trip',
  templateUrl: './display-selected-trip.component.html',
  styleUrls: ['./display-selected-trip.component.css']
})
export class DisplaySelectedTripComponent implements OnInit
{
  @Input() trip: Trip = new Trip();

  public total : number = 0;
  public single : number = 0

  constructor(public tripService : TripService,
              public histService : TripHistService,
              public currencyService : CurrencyService) {

  }

  ngOnInit(): void {
    this.single= this.tripService.calculateTrip(this.trip)
    this.total = this.single * this.trip.selected
  }

  plusClicked(){
    
  }

  minusClicked(){

  }

  buyTrip(){

  }

}
