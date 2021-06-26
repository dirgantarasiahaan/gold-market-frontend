import { HttpClient } from '@angular/common/http';
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

  // async setTasks(task: Login): Promise<void>{
  //   this.tasks = task;

  //   return new Promise((resolve ) => {
  //     setTimeout(() => resolve(), 1000)
  //   });
  // }

  // async getTasks(): Promise<Login>{
  //   return new Promise((resolve ) => {
  //     setTimeout(() => resolve(this.tasks), 1000)
  //   });
  // }

  constructor(
    private readonly http: HttpClient
  ) { }

  login(credentials: { email: string, password: string}): Observable<string>{
    return this.http.post('https://reqres.in/api/login', credentials)
      .pipe(
        retry(3),
        map((response:any) => response.token)
      );
  }
}
