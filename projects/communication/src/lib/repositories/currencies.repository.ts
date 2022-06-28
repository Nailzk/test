import { HttpEvent } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { HttpRepository } from '../http.repository';
import { ICurrency, ICurrencyParams } from '../model';

export class CurrenciesRepository extends HttpRepository<ICurrency> {
  _httpOptions = {
    headers: {
      'X-Api-Key': environment.converterApiKey,
    },
  };

  get _baseUrl(): string {
    return `${environment.converterApiUrl}/convertcurrency`;
  }

  public getItem(query: ICurrencyParams): Observable<HttpEvent<ICurrency>> {
    return super.getItem(query);
  }
}
