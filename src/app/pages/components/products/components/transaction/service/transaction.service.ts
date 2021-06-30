import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PurchaseDetail } from '../models/purchase-detail';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  purchase(customerId: string, payload: PurchaseDetail): Observable<any> {
    return this.http
      .post<any>(`http://localhost:8888/customer/${customerId}/purchases`, payload)
      .pipe();
  }

}

