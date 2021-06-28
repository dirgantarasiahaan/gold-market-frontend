import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  buy(customerId: string): Observable<any> {
    return this.http
      .post(`http://localhost:8888/customer/${customerId}/purchases`, customerId)
      .pipe(retry(3));
  }
}

