import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../../models/customer';

const API_BASE_URL = `${environment.apiBaseUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getUserById(customerId: string): Observable<any> {
    return this.http
    .get(`${API_BASE_URL}/customer/${customerId}`)
    .pipe(retry(5))
  }


  updateUserById(payload: Customer): Observable<Customer> {
    return this.http
    .put<Customer>(`${API_BASE_URL}/customer`, payload)
    .pipe(retry(5))
  }
}
