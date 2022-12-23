import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";

@Component({
  selector: 'app-trips-filter',
  templateUrl: './trips-filter.component.html',
  styleUrls: ['./trips-filter.component.css']
})
export class TripsFilterComponent {

  constructor(public tripService: TripService) {
  }

  filterItems() {
    this.tripService.filterItems()
  }

  clearFilters()
  {
    this.tripService.clearFilters();
  }
}
