import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrenciesRepository, ICurrency } from 'communication';
import {
  DEFAULT_AMOUNT,
  DEFAULT_CURRENCIES,
  DEFAULT_FROM_CONVERT_CURRENCY,
  DEFAULT_TO_CONVERT_CURRENCY,
} from './constant';

@UntilDestroy()
@Component({
  selector: 'lib-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
  public form: FormGroup;

  public currencies = DEFAULT_CURRENCIES;

  public isLoading = false;

  public toConvertCurrency = DEFAULT_TO_CONVERT_CURRENCY;
  public fromConvertCurrency = DEFAULT_FROM_CONVERT_CURRENCY;

  private _currencyRate = 0;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _currenciesRepository: CurrenciesRepository
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._subscribeOnConvertToChanges();
    this._subscribeOnConvertFromChanges();
  }

  public handleCurrencyChanges(): void {
    this._initCurrencies();
  }

  private _initForm() {
    this.form = this._fb.group({
      convertFrom: [DEFAULT_AMOUNT, [Validators.required]],
      convertTo: [null, [Validators.required]],
    });

    this._initCurrencies();
  }

  private _initCurrencies() {
    this.isLoading = true;

    const { convertFrom: amount } = this.form.value;

    this._currenciesRepository
      .getItem({
        have: this.fromConvertCurrency,
        want: this.toConvertCurrency,
        amount,
      })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (res: any) => this._handleResponse(res),
        error: (err) => console.error(err),
        complete: () => (this.isLoading = false),
      });
  }

  private _handleResponse(val: ICurrency): void {
    const { new_amount: convertTo, old_amount: convertFrom } = val;
    this._currencyRate = convertFrom / convertTo;

    this.form.patchValue({ convertTo, convertFrom });
  }

  private _subscribeOnConvertToChanges() {
    this.form.controls?.['convertTo'].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((val) => {
        const value = Number(val);

        const convertFrom = Number(value * this._currencyRate).toFixed(2);

        this.form.patchValue({ convertFrom }, { emitEvent: false });
      });
  }

  private _subscribeOnConvertFromChanges() {
    this.form.controls?.['convertFrom'].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((val) => {
        const value = Number(val);

        const convertTo = Number(value / this._currencyRate).toFixed(2);

        this.form.patchValue({ convertTo }, { emitEvent: false });
      });
  }
}
