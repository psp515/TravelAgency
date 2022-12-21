

export class CurrencyConverter {
  getCurrencyFactor(currency:string)
  {
    if (currency == '$')
      return 4.45

    if (currency == '€')
      return 4.65

    return 1
  }

  convertMoneyToPlN(money:number, currency:string)
  {
    return money * this.getCurrencyFactor(currency);
  }
}
