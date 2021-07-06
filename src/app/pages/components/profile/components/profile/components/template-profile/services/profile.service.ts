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

  BASE_URL = 'http://localhost:8888'

  getUserById(customerId: string): Observable<any> {
    return this.http
    .get(`${this.BASE_URL}/customer/${customerId}`)
    .pipe(retry(5))
  }


  updateUserById(payload: Customer): Observable<Customer> {
    return this.http
    .put<Customer>(`${this.BASE_URL}/customer`, payload)
    .pipe(retry(5))
  }
}
