

export class Review
{
  constructor(public key: string = '',
              public username: string,
              public tripName: string,
              public tripId: string,
              public review: string,
              public grade: number,
              public tripDate: string)
  {}
}
