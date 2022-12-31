import { Component } from '@angular/core';
import {TripService} from "../../services/TripService";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {

  constructor(public tripService:TripService) {
  }

}
