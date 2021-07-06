import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HistoryPrice } from '../models/history-price';
import { Product } from '../models/product';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  BASE_URL = 'http://localhost:8888'

  addPocket(payload: Products): Observable<Products> {
    return this.http
    .post<Products>(`${this.BASE_URL}/pocket`, payload)
      .pipe(retry(5));
  }

  getPocketByCustIdProdId(custId: string, prodId: string): Observable<Products[]>{
    return this.http
      .get<Products[]>(`${this.BASE_URL}/customer/${custId}/product/${prodId}/pockets`)
      .pipe(retry(5))
  }

  getProductsByCustomerId(customerId: string): Observable<Product[]> {
    return this.http
    .get<Product[]>(`${this.BASE_URL}/customer/${customerId}/products`)
    .pipe(retry(5));
  }

  deletePocket(pocketId: string): Observable<any>{
    return this.http
      .delete<any>(`${this.BASE_URL}/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  getPocketById(pocketId: string): Observable<any>{
    return this.http
      .get<any>(`${this.BASE_URL}/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  updatePocketById(payload: Products): Observable<any>{
    return this.http
      .put(`${this.BASE_URL}/pocket`, payload)
      .pipe(retry(5))
  }

  getProductHistoryPrice(productId: string): Observable<HistoryPrice[]> {
    return this.http
      .get<HistoryPrice[]>(`${this.BASE_URL}/product/${productId}/history`)
      .pipe(retry(5))
  }

}
