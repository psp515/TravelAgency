import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent {

  model = new Trip();

  constructor(private tripService: TripService, private router: Router)
  {
    this.refreshData();
    this.model.image = "https://via.placeholder.com/600/92c952";
  }

  onSubmit()
  {
    this.model.id = (new Date).getTime()
    this.model.likes = 0
    this.model.image = "https://via.placeholder.com/600/92c952";
    this.tripService.addItem(this.model)
    this.refreshData()
    this.router.navigate(['/trips']);
  }

  refreshData()
  {
    this.model = new Trip();
    this.model.likes = 0
    this.model.available = 1;
  }

  currencies = ['$',
    'PLN',
    '€']

}
