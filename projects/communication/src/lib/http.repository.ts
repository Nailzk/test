import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from './repository-abstract';

@Injectable()
export abstract class HttpRepository<T> extends Repository<T> {
  _httpOptions: any = {};

  constructor(@Inject(HttpClient) protected _http: HttpClient) {
    super();
  }

  public getItem(query?: any): Observable<HttpEvent<T>> {
    return this._http.get<T>(this._baseUrl, {
      ...this._httpOptions,
      params: query,
    });
  }

  get _baseUrl(): string {
    throw Error('Implement _baseUrl method');
  }

  protected transform(item: T): any {
    return item;
  }
}
