import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExchangeComponent } from './exchange.component';

@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    ExchangeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  exports: [ExchangeComponent],
})
export class ExchangeModule {}
