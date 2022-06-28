import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class Repository<T> {
  abstract getItem(query?: any): Observable<HttpEvent<T>>;
}
