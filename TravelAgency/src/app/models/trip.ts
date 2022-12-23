


export class Trip {
  id: number;
  name: string;
  country: string;
  tripStart: string;
  tripEnd: string;
  price: number;
  description: string;
  image: string;
  currency: string;
  likes: number;
  available: number;
  stars: number;
  selected: number = 0;
  shortDescription: string;
  cheapestTrip: boolean = false;
  theMostExpensiveTrip: boolean= false;

  constructor(id: number = -1,
              name: string = "",
              country: string = "",
              tripStart: string = "",
              tripEnd: string = "",
              price: number = 0,
              description: string = "",
              image: string = "",
              currency: string = "",
              likes: number = 0,
              available: number = 0,
              shortDescription: string = "",
              selected: number = 0,
              stars:number = 3)
  {
    this.id = id;
    this.name = name;
    this.country = country;
    this.tripStart = tripStart;
    this.tripEnd = tripEnd;
    this.price = price;
    this.description = description;
    this.image = image;
    this.currency = currency;
    this.likes = likes;
    this.available = available;
    this.selected = selected;
    this.shortDescription = shortDescription;
    this.stars=stars;
  }

}
