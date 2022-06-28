import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderCurrencyItemComponent } from './components/header-currency-item/header-currency-item.component';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderCurrencyItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
