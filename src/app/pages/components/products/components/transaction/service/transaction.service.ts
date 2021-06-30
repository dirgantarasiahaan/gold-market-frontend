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


  purchase(customerId: string, payload: PurchaseDetail){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/customer/${customerId}/purchases`
      this.http.post(apiUrl, payload)
      .toPromise()
      .then(
        (response:any) => {
          resolve(response);
        }, error => {
          rejects(error);
        }
      )
    })
    return promise
  }



}

