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

  addPocket(payload:Products){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/pocket`
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

  getPocketByCustIdProdId(custId: string, prodId: string){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/customer/${custId}/product/${prodId}/pockets`
      this.http.get(apiUrl)
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

  getProductsByCustomerId(customerId: string){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/customer/${customerId}/products`
      this.http.get(apiUrl)
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


  deletePocket(pocketId: string){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/pocket/${pocketId}`
      this.http.delete(apiUrl)
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

  getPocketById(pocketId: string){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/pocket/${pocketId}`
      this.http.get(apiUrl)
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

  updatePocketById(payload: Products){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/pocket`
      this.http.put(apiUrl, payload)
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

  getProductHistoryPrice(productId: string){
    let promise = new Promise<void>((resolve, rejects) => {
      let apiUrl = `http://localhost:8888/product/${productId}/history`
      this.http.get(apiUrl)
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
