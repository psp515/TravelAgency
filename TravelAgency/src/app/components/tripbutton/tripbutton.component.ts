import {Component, Input} from '@angular/core';
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-tripbutton',
  templateUrl: './tripbutton.component.html',
  styleUrls: ['./tripbutton.component.css']
})
export class TripbuttonComponent {
  @Input() trip: Trip;

  constructor() {
    this.trip = new Trip();
  }

  plusClicked(){

  }

  minusClicked(){

  }
}


// TODO
// Global styles
// trip style changes when small screen -> doestn rotate.
