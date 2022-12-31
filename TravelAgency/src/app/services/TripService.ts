
import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {HttpTripsService} from "./HttpTripsService";
import {CurrencyConverter} from "../tools/CurrencyConverter";
import {FilterOptions} from "../models/filterModel"
import {CheckedPlace} from "../models/checkedPlace";
import {UserBarModel} from "../models/userBarModel";

@Injectable({
  providedIn: 'root'
})
export class TripService
{
  trips: Trip[] = [];

  filteredTrips: Trip[] = [];

  public filters: FilterOptions;

  lastFilter : number = 0;

  public userBarData: UserBarModel

  constructor(tripsService: HttpTripsService) {

    this.userBarData = new UserBarModel(0,0,"","","")

    // TODO : load data from firebase
    fetch("./assets/data/trips.json")
      .then(res => res.json())
      .then(json => {
        let tmp = json.trips

        for (let item in tmp) {
          let x = tmp[item] as Trip
          x.selected = 0
          this.trips.push(x)
          this.filteredTrips.push(x)
        }

        this.updateExtremes();

        for(let i in this.filteredTrips)
        {
          let item = this.filteredTrips[i]
          if(this.filters.places.filter((a) => a.name == item.country).length == 0)
            this.filters.places.push(new CheckedPlace(item.country, true));
        }

        this.refreshFilters();

      })

    this.filters = new FilterOptions();
  }

  getAllItems(): Array<Trip> {
    return this.trips;
  }

  getItems(): Array<Trip> {
    return this.filteredTrips;
  }

  getItem(id:number){
    return this.trips.find(trip => trip.id === id);
  }

  filterItems()
  {
    this.filteredTrips = []
    this.filteredTrips = this.trips.filter(a => this.tripRequirements(a))

    this.refreshFilters();

    this.lastFilter = new Date().getTime();
  }

  tripRequirements(trip:Trip){

    //TODO : ConvertPrices

    if(!(trip.price >= this.filters.LowPrice &&
      trip.price <= this.filters.TopPrice &&
      trip.stars >= this.filters.minGrade &&
      trip.stars <= this.filters.maxGrade &&
      Date.parse(trip.tripStart) >= Date.parse(this.filters.StartDate) &&
      Date.parse(trip.tripEnd) <= Date.parse(this.filters.EndDate)))
      return false;

    try{

      let item = this.filters.places.find(a=> a.name == trip.country);
      return !!item?.selected;

    }
    catch (Exception)
    {
      return false;
    }
  }

  refreshFilters()
  {
    this.filters.LowPrice = this.filteredTrips.reduce((a,b)=> a.price < b.price ? a : b).price
    this.filters.TopPrice = this.filteredTrips.reduce((a,b)=> a.price > b.price ? a : b).price

    this.filters.minGrade = this.filteredTrips.reduce((a,b)=> a.stars < b.stars ? a : b).stars
    this.filters.maxGrade = this.filteredTrips.reduce((a,b)=> a.stars > b.stars ? a : b).stars

    this.filters.StartDate = this.filteredTrips.reduce((a,b) =>
      Date.parse(a.tripStart) < Date.parse(b.tripStart)  ? a : b).tripStart
    this.filters.EndDate = this.filteredTrips.reduce((a,b) =>
      Date.parse(a.tripEnd) > Date.parse(b.tripEnd)  ? a : b).tripEnd;

    for(let i in this.filters.places)
      this.filters.places[i].selected = false;

    for(let i in this.filteredTrips)
    {
      let item = this.filteredTrips[i]
      if(this.filters.places.filter((a) => a.name == item.country).length == 0)
        this.filters.places.push(new CheckedPlace(item.country, true));
      else {
        let ref = this.filters.places.find(a=>a.name == item.country)
        if(ref!=null)
          ref.selected = true;

      }
    }

    console.log(this.filters)
  }

  clearFilters()
  {
    this.filteredTrips = []

    for(let item in this.trips)
      this.filteredTrips.push(this.trips[item])

    this.refreshFilters()

    this.lastFilter = new Date().getTime();
  }

  addItem(trip:Trip)
  {
    this.trips.push(trip)
    this.filteredTrips.push(trip)

    if(this.filters.places.filter((a)=> a.name == trip.country).length == 0)
      this.filters.places.push(new CheckedPlace(trip.country, true));

    this.clearFilters()
    this.updateExtremes()
  }

  deleteItem(id:number) {
    this.filteredTrips = this.filteredTrips.filter(trip => trip.id !== id);
    this.trips = this.trips.filter(trip => trip.id !== id);
    this.clearFilters();
    this.updateExtremes()
  }

  updateExtremes() {
    this.trips.forEach( (trip) =>
    {
      trip.cheapestTrip = false;
      trip.theMostExpensiveTrip = false;
    });

    if(this.trips.length < 2)
      return;

    let converter = new CurrencyConverter();

    let extreme : Trip = this.trips
      .filter(a=> a.available != a.selected)
      .reduce((a,b) =>
        converter.convertMoneyToPlN(a.price,a.currency) < converter.convertMoneyToPlN(b.price, b.currency) ? a:b)
    extreme.cheapestTrip = true

    extreme = this.trips
      .filter(a=> a.available != a.selected && !a.cheapestTrip )
      .reduce((a,b) =>
        converter.convertMoneyToPlN(a.price, a.currency) > converter.convertMoneyToPlN(b.price, b.currency) ? a:b)

    if(extreme != null)
      extreme.theMostExpensiveTrip = true
  }

  updateBarData()
  {
     this.userBarData.selectedTrips = this.trips.reduce((accumulator, trip) => {return accumulator + trip.selected;}, 0);
     let converter = new CurrencyConverter();
     this.userBarData.tripsTotalCost = Math.round(
       100*this.trips.reduce((accumulator, trip) =>
       {
         return accumulator +  trip.selected * converter.convertMoneyToPlN(trip.price, trip.currency);
         }, 0))/100
  }

}
