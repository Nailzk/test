import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyWidget } from '../../interface';

@Component({
  selector: 'lib-header-currency-item',
  templateUrl: './header-currency-item.component.html',
  styleUrls: ['./header-currency-item.component.scss'],
})
export class HeaderCurrencyItemComponent {
  @Input() item: ICurrencyWidget | undefined;
}
