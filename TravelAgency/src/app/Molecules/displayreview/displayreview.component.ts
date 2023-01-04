import { Component, Input } from '@angular/core';
import {Review} from "../../models/Review";

@Component({
  selector: 'app-displayreview',
  templateUrl: './displayreview.component.html',
  styleUrls: ['./displayreview.component.css']
})
export class DisplayreviewComponent {
  @Input() review: Review = new Review(0,
    "",
    "",
    0,
    "",
    0,
    "")

}
