import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

import { MARKET_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  categories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${MARKET_API}/categories`)
  }
}
