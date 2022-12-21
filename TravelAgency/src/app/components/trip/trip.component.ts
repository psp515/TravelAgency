import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import {Trip} from "../../models/trip";
import {TripService} from "../../services/TripService";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  @Input() trip: Trip
  @Input() disableButtons: boolean = false;

  constructor(private tripService: TripService, private router: Router) {
    this.trip = new Trip();
  }

  @Output() refreshSelected = new EventEmitter<string>();
  @Output() refreshTrips = new EventEmitter<string>();

  callParent = () => this.refreshSelected.emit('refreshSelected');

  plusClicked(){
    if (this.disableButtons)
      return;

    if(this.trip.selected == this.trip.available)
    {
      alert("Maksymalna liczba miejsc.");
      return;
    }

    this.trip.selected+=1;
    this.callParent();
  }

  minusClicked(){

    if (this.disableButtons)
      return;

    if(this.trip.selected == 0)
    {
      alert("Minimalna liczba miejsc.");
      return;
    }

    this.trip.selected-=1;
    this.callParent();
  }

  deleteTrip(){
    if (this.disableButtons)
      return;

    this.tripService.deleteItem(this.trip.id);
    this.refreshTrips.emit('refreshTrips');
    this.callParent();
  }

  goToTrip() {
    if (this.disableButtons)
      return;

    this.router.navigate(['/trip/'+this.trip.id, ]);
  }

  colorfiller = () => {
    let value = this.trip.selected / this.trip.available;

    if(value < 0.8)
      return 'transparent';

    if(value < 0.85)
      return '#ffcbd1';

    if(value < 0.9)
      return '#f69697';

    if(value < 0.95)
      return '#ee6bb3';

    return '#f94449';
  }

  borderFiller = () => {
    if (this.trip.cheapestTrip)
      return '9px solid #E5BDF6';


    if (this.trip.theMostExpensiveTrip)
      return '9px solid #83C760';

    return '0px solid transparent';
  }

  backgroundColorFiller = () => {
    if (this.trip.cheapestTrip)
      return '#E5BDF6';


    if (this.trip.theMostExpensiveTrip)
      return '#83C760';

    return 'transparent';
  }

}
