

export class Review
{
  constructor(public reviewId: number,
              public username: string,
              public tripName: string,
              public tripId: number,
              public review: string,
              public grade: number,
              public tripDate: string)
  {}
}
