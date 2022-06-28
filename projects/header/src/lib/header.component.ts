import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CurrenciesRepository, ICurrency } from 'communication';
import { forkJoin } from 'rxjs';
import { COLORS_ARRAY } from './constant';
import { ICurrencyWidget } from './interface';

@UntilDestroy()
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currencyData = ['USD', 'EUR'];

  public currencies: ICurrencyWidget[] = [];

  public readonly convertTo = 'UAH';

  private readonly colorsArray = COLORS_ARRAY;

  constructor(private readonly _currenciesRepository: CurrenciesRepository) {}

  ngOnInit(): void {
    this._initCurrencies();
  }

  private _initCurrencies() {
    const requests = this.currencyData.map((val) =>
      this._currenciesRepository.getItem({
        have: val,
        want: this.convertTo,
        amount: 1,
      })
    );

    forkJoin(requests)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.currencies = res.map((val: ICurrency, i: number) => ({
          ...val,
          color: this.colorsArray[i],
        }));
      });
  }
}
