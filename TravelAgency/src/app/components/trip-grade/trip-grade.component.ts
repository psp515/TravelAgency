import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-trip-grade',
  templateUrl: './trip-grade.component.html',
  styleUrls: ['./trip-grade.component.css']
})
export class TripGradeComponent {

  @Input() grade: number = 3;
  @Input() onlyDisplay = false;

  images=["assets/star.png",
    "assets/star.png",
    "assets/star.png",
    "assets/emptystar.png",
    "assets/emptystar.png"]


  refreshImages(max: number) {
    if(this.onlyDisplay)
      return;

    for (let i = 0; i < max + 1; i++)
      this.images[i] = "assets/star.png"

    for (let i = max+1; i < 5; i++)
      this.images[i] = "assets/emptystar.png"

  }
}
