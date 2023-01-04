import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() slides: string[] = [];
  i: number;

  constructor() {
    this.i = 0;
  }

  ngOnInit(): void {
    if(this.slides.length == 0)
      this.slides = ["assets/data/images/Rome1.jpeg",
                     "https://via.placeholder.com/600/92c952"]
  }

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

}
