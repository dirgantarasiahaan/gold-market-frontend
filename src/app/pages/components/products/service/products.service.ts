import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Product } from '../models/product';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient
  ) { }


  getAll(customerId: string): Observable<Products[]> {
    return this.http
    .get<Products[]>(`http://localhost:8888/customer/${customerId}/pockets`)
      // .get<any>(`${environment.apiBaseUrl}/premium/courses`)
      .pipe(retry(5));
  }


  addPocket(payload: Products): Observable<Products> {
    return this.http
    .post<Products>(`http://localhost:8888/pocket`, payload)
      .pipe(retry(5));
  }


  getProductsByCustomerId(customerId: string): Observable<Product[]> {
    return this.http
    .get<Product[]>(`http://localhost:8888/customer/${customerId}/products`)
    .pipe(retry(5));
  }

  deletePocket(pocketId: string): Observable<any>{
    return this.http
      .delete<any>(`http://localhost:8888/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  getPocketById(pocketId: string): Observable<any>{
    return this.http
      .get<any>(`http://localhost:8888/pocket/${pocketId}`)
      .pipe(retry(5))
  }

  updatePocketById(payload: Products): Observable<any>{
    return this.http
      .put(`http://localhost:8888/pocket`, payload)
      .pipe(retry(5))
  }

}
