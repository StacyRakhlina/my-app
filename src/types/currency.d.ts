interface IInitialCurrency {
  currentCurrencyId: number
  currencies: currenciesList[]
}

interface currenciesList {
  id: number
  name: string
  value: number
  flag: string
}
