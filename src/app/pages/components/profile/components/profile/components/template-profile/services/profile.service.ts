import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Customer } from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly http: HttpClient
  ) { }


  getUserById(customerId: string): Observable<any> {
    return this.http
    .get(`http://localhost:8888/customer/${customerId}`)
    .pipe(retry(5))
  }


  updateUserById(payload: Customer): Observable<Customer> {
    return this.http
    .put<Customer>(`http://localhost:8888/customer`, payload)
    .pipe(retry(5))
  }
}
