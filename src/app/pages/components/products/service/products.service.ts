import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HistoryPrice } from '../models/history-price';
import { Product } from '../models/product';
import { Products } from '../models/products';

const API_BASE_URL = `${environment.apiBaseUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  addPocket(payload: Products): Observable<Products> {
    return this.http
    .post<Products>(`${API_BASE_URL}/pocket`, payload)
      .pipe(retry(5));
  }

  getPocketByCustIdProdId(custId: string, prodId: string): Observable<Products[]>{
    return this.http
      .get<Products[]>(`${API_BASE_URL}/customer/${custId}/product/${prodId}/pockets`)
      .pipe(retry(5))
  }

  getProductsByCustomerId(customerId: string): Observable<Product[]> {
    return this.http
    .get<Product[]>(`${API_BASE_URL}/customer/${customerId}/products`)
    .pipe(retry(5));
  }

  deletePocket(pocketId: string): Observable<any>{
    return this.http
      .delete<any>(`${API_BASE_URL}/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  getPocketById(pocketId: string): Observable<any>{
    return this.http
      .get<any>(`${API_BASE_URL}/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  updatePocketById(payload: Products): Observable<any>{
    return this.http
      .put(`${API_BASE_URL}/pocket`, payload)
      .pipe(retry(5))
  }

  getProductHistoryPrice(productId: string): Observable<HistoryPrice[]> {
    return this.http
      .get<HistoryPrice[]>(`${API_BASE_URL}/product/${productId}/history`)
      .pipe(retry(5))
  }

  getProductById(productId: string): Observable<Product>{
    return this.http
      .get<Product>(`${API_BASE_URL}/product/${productId}`)
      .pipe(retry(5))
  }

}
