import { Component } from '@angular/core';
import { CurrenciesRepository } from 'communication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _currenciesRepository: CurrenciesRepository) {}
}
