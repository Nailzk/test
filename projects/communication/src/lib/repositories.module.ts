import { ModuleWithProviders, NgModule } from '@angular/core';
import { CurrenciesRepository } from './repositories';

@NgModule({})
export class Repositories {
  static forRoot(): ModuleWithProviders<Repositories> {
    return {
      ngModule: Repositories,
      providers: [
        CurrenciesRepository
      ],
    };
  }
}
