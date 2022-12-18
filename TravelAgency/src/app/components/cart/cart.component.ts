import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() selectedTrips:number;

  constructor() {
    this.selectedTrips = 0
  }

  changeColor =()=>
  {
    if (this.selectedTrips < 10)
      return '#E5BDF6'

    return '#83C760'
  }

}
