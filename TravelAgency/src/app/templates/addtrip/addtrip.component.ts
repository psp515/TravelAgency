import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent {

  model = new Trip();

  constructor(private tripService: TripService)
  {
    this.refreshData();
  }

  onSubmit()
  {
    this.model.id = (new Date).getTime()
    this.model.likes = 0
    console.log(this.model)
  }

  refreshData()
  {
    this.model = new Trip();
    this.model.likes = 0
    this.model.available = 1;
  }

  //could be request do db representing where trips could be

  countries = ['Poland',
    'Italy',
    'Spain',
    'France',
    'England',
    'Portugal',
    'Maroko',
    'Qatar',
    'Saudi Arabia',
    'Egypt',
    'Greece',
    'Croatria',
    'Austira',
    'Germany',
    'Norway'];

  currencies = ['$',
    'PLN',
    '€']

}
