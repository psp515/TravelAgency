import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/TripService";
import {Trip} from "../../models/trip";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit{

  model = new Trip();

  constructor(private tripService: TripService, private router: Router)
  {
    this.refreshData();
    this.model.image = "https://via.placeholder.com/600/92c952";
  }

  onSubmit()
  {
    this.model.key = (new Date).getTime().toString()
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

  tmpUrl: string = "https://via.placeholder.com/600/92c952";

  addUrl() {
    this.model.urls.push(this.tmpUrl)
  }

  removeLink(param:string) {
    this.model.urls = this.model.urls.filter(x=>x!=param)
  }

  ngOnInit(): void {
    this.model = new Trip((new Date).getTime().toString(),
      "Name",
      "Country",
      "2022-10-10",
      "2022-10-12",
      1000,
      "sagfsdgsdfgsdfnjgisndfjgns dpfng sdfgn sdfjg lskdfn gksdnfg ksdlnfg sdfg",
      "https://via.placeholder.com/600/92c952",
      "$",
      0,
      100,
      "skifgnjsidfng spdfng sdofng [osdnfg sdfp gsdf",
      0,
      3,
      ["https://via.placeholder.com/600/92c952",
        "https://via.placeholder.com/150/771796"]);
  }
}
