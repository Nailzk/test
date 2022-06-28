export interface ICurrency {
  new_amount: number;
  new_currency: string;
  old_amount: number;
  old_currency: string;
}

export interface ICurrencyParams {
  have: string;
  want: string;
  amount: number;
}
