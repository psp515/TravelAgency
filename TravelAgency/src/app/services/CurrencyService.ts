import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService
{

  current : string = "PLN"

  public convertToActualCurrency(price: number, priceCurrency:string) : number
  {
    return Math.round(this.calculate(price,priceCurrency) * 100) / 100
  }


  private calculate(price: number, priceCurrency:string){
    if (priceCurrency == "PLN")
    {
      if(this.current == "PLN")
        return price

      if(this.current == "$")
        return price / 4.5

      return price / 5
    }
    else if(priceCurrency == "$")
    {
      if(this.current == "PLN")
        return price * 4.5

      if(this.current == "$")
        return price

      return price * 0.9
    }
    else
    {
      if(this.current == "PLN")
        return price * 5

      if(this.current == "$")
        return price * 5 / 4.5

      return price
    }
  }

}
