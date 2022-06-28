import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ExchangeComponent }])],
  exports: [],
})
export class ExchangeRoutingModule {}
