import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'http://localhost:8888'

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: { username: string, password: string}): Observable<any>{
    return this.http.post(`${this.BASE_URL}/login`, credentials)
      .pipe(
        retry(3),
        map((response:any) => response)
      );
  }
}
