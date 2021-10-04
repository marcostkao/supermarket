import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

import { HandlerService } from './../shared/services/handler/handler.service';
import { MARKET_API } from '../app.api';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from '../product-detail/item/item.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  categories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${MARKET_API}/categories`).pipe(
      map((obj) => obj),
      catchError((erro) => HandlerService.handler(erro))
    );
  }

  categoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${MARKET_API}/categories/${id}`).pipe(
      map((obj) => obj),
      catchError((erro) => HandlerService.handler(erro))
    );
  }

  itemOfCategories(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${MARKET_API}/categories/${id}/item`).pipe(
      map((obj) => obj),
      catchError((erro) => HandlerService.handler(erro))
    )
  }
}
