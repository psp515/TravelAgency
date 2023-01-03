import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hamburger :boolean = false;

  hamburgerClicked()
  {
    this.hamburger = !this.hamburger;
  }

  optionChosen(){
    this.hamburger = false;
  }

}
