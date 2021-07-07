import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PurchaseDetail } from '../models/purchase-detail';

const API_BASE_URL = `${environment.apiBaseUrl}`

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  purchase(customerId: string, payload: PurchaseDetail): Observable<any> {
    return this.http
      .post<any>(`${API_BASE_URL}/customer/${customerId}/purchases`, payload)
      .pipe();
  }

  historyPurchases(customerId: string): Observable<any> {
    return this.http
      .get(`${API_BASE_URL}/customer/${customerId}/purchases`)
      .pipe(retry(3))
  }

}

