

export class Review
{
  public review: string = '';

  constructor(review: string,
              public reviewId: number,
              public grade: number,
              public userId: number,
              public tripId: number) {
    this.review = review;
  }
}
