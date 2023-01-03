import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";
import {CurrencyService} from "../../services/CurrencyService";

@Component({
  selector: 'app-trips-filter',
  templateUrl: './trips-filter.component.html',
  styleUrls: ['./trips-filter.component.css']
})
export class TripsFilterComponent {

  constructor(public tripService: TripService, public currencyService: CurrencyService) {
  }

  filterItems() {
    this.tripService.filterItems()
  }

  clearFilters()
  {
    this.tripService.clearFilters();
  }
}
