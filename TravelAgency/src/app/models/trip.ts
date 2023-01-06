
export class Trip {
  public cheapestTrip: boolean = false;
  public theMostExpensiveTrip: boolean = false;


  constructor(public key: string = '',
              public name: string = "",
              public country: string = "",
              public tripStart: string = "",
              public tripEnd: string = "",
              public price: number = 0,
              public description: string = "",
              public image: string = "",
              public currency: string = "",
              public likes: number = 0,
              public available: number = 0,
              public shortDescription: string = "",
              public selected: number = 0,
              public stars:number = 3,
              public urls:string[]=[])
  {
  }

}
