import {Trip} from "../models/trip";
import {Injectable} from "@angular/core";
import {CurrencyConverter} from "../tools/CurrencyConverter";
import {FilterOptions} from "../models/filterModel"
import {CheckedPlace} from "../models/checkedPlace";
import {UserBarModel} from "../models/userBarModel";
import {CurrencyService} from "./CurrencyService";
import {HttpTripService} from "./HttpTripService";

@Injectable({
  providedIn: 'root'
})
export class TripService
{
  trips: Trip[] = [];

  filteredTrips: Trip[] = [];

  public filters: FilterOptions;

  public userBarData: UserBarModel

  constructor(private tripService: HttpTripService,
              private currencyService : CurrencyService) {
    this.userBarData = new UserBarModel(0,0,"","","")
    this.filters = new FilterOptions();
  }

  //region FILTERS

  filterItems() {
    this.filteredTrips = []

    this.filteredTrips = this.trips.filter(a => this.tripRequirements(a))

    this.refreshFilters();
  }

  tripRequirements(trip:Trip){

    if(!(this.calculateTrip(trip) >= this.filters.LowPrice &&
      this.calculateTrip(trip)  <= this.filters.TopPrice &&
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

  refreshFilters() {
    if(this.filteredTrips.length == 0)
      return

    this.filters.LowPrice = this.calculateTrip(this.filteredTrips.reduce((a,b)=> this.calculateTrip(a) < this.calculateTrip(b) ? a : b))
    this.filters.TopPrice = this.calculateTrip(this.filteredTrips.reduce((a,b)=> this.calculateTrip(a) > this.calculateTrip(b)  ? a : b))

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

    this.updateExtremes()
  }

  clearFilters() {
    this.filteredTrips = []

    for(let i in this.trips)
      this.filteredTrips.push(this.trips[i])

    this.refreshFilters()
  }

  updateExtremes() {
    this.trips.forEach( (trip) =>
    {
      trip.cheapestTrip = false;
      trip.theMostExpensiveTrip = false;
    });

    if(this.filteredTrips.length < 2)
      return;

    let extreme : Trip = this.filteredTrips
      .filter(a=> a.available != a.selected)
      .reduce((a,b) => this.calculateTrip(a) < this.calculateTrip(b)  ? a:b)
    extreme.cheapestTrip = true

    let extreme2 = this.filteredTrips
      .filter(a=> a.available != a.selected && !a.cheapestTrip )
      .reduce((a,b) => this.calculateTrip(a) > this.calculateTrip(b)  ? a:b)

    if(extreme2 != null)
      extreme2.theMostExpensiveTrip = true
  }

  //endregion

  //region CRUD

  addItem(trip:Trip) {

    this.tripService.addItem(trip)
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

  getAllItems(): Array<Trip> {
    return this.trips;
  }

  getItems(): Array<Trip> {
    return this.filteredTrips;
  }

  getItem(id:number) : Trip{
    for(let i = 0;i < this.trips.length;i++)
      if (this.trips[i].id == id)
        return this.trips[i]

    return new Trip();
  }

  async refreshItems()
  {
      let data = this.tripService.getItems().subscribe(change => {

      for(let item of change)
      {
        if(this.trips.filter(x=>x.id == item.id).length == 0)
        {
          this.trips.push(item)
          this.filteredTrips.push(item)
        }
      }

      for(let i in this.filteredTrips)
      {
        let item = this.filteredTrips[i]
        if(this.filters.places.filter((a) => a.name == item.country).length == 0)
          this.filters.places.push(new CheckedPlace(item.country, true));
      }

      this.refreshFilters();

    });


  }

  //endregion

  injectData(trips:Trip[])
  {
    for(let i of trips)
    {
      this.trips.push(i)
      this.trips.push(i)
    }

    this.updateExtremes();

    for(let i in this.filteredTrips)
    {
      let item = this.filteredTrips[i]
      if(this.filters.places.filter((a) => a.name == item.country).length == 0)
        this.filters.places.push(new CheckedPlace(item.country, true));
    }

    this.refreshFilters();
  }

  updateBarData() {
     this.userBarData.selectedTrips = this.trips.reduce((accumulator, trip) => {return accumulator + trip.selected*1;}, 0);
     let converter = new CurrencyConverter();
     this.userBarData.tripsTotalCost = Math.round(
       100*this.trips.reduce((accumulator, trip) =>
       {
         return accumulator +  trip.selected * converter.convertMoneyToPlN(trip.price, trip.currency);
         }, 0))/100
  }

  calculateTrip(trip : Trip)
  {
    if(trip == null)
      return 0
    return this.currencyService.convertToActualCurrency(trip.price, trip.currency)
  }

  tripBought(id:number, bought: number) {
    let trip = this.trips.filter((x)=>x.id == id)[0]

    if(trip == null)
      return;

    trip.available -= bought;
    trip.selected = 0;
  }
}
