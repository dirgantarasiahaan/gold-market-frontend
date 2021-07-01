import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tasks: Login = {
    username: '',
    password: ''
  }

  result:any;
  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: { username: string, password: string}){
    return this.http.post('http://localhost:8888/login', credentials)
      .pipe(
        retry(3),
        map((response:any) => response)
      );
  }



}
