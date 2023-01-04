import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Review} from "../../models/Review";

@Component({
  selector: 'app-trip-grade',
  templateUrl: './trip-grade.component.html',
  styleUrls: ['./trip-grade.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: TripGradeComponent
    }
  ]
})
export class TripGradeComponent implements ControlValueAccessor {

  grade: number = 3;
  @Input() onlyDisplay = false;

  images=["assets/star.png",
    "assets/star.png",
    "assets/star.png",
    "assets/emptystar.png",
    "assets/emptystar.png"]

  onChange = (grade:number) => {};

  onTouched = () => {};

  refreshImages(max: number) {
    if(this.onlyDisplay)
      return;

    for (let i = 0; i < max + 1; i++)
      this.images[i] = "assets/star.png"

    for (let i = max+1; i < 5; i++)
      this.images[i] = "assets/emptystar.png"

  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(obj: number): void {
    if (obj != undefined) {
      this.grade = obj + 1;
      this.refreshImages(obj);
      this.onChange(this.grade)
    }
  }
}
