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

  login(credentials: { username: string, password: string}){
    return this.http.post('http://localhost:8888/login', credentials)
      .pipe(
        retry(3),
        map((response:any) => response)
      );
  }

  // login(credentials: { username: string, password: string}){
  //   let promise = new Promise<void>((resolve, rejects) => {
  //     let apiUrl = `http://localhost:8888/login`
  //     this.http.post(apiUrl, credentials)
  //       .toPromise()
  //       .then(
  //         (response:any) => {
  //           resolve(response);
  //         }, error => {
  //           rejects(error);
  //         }
  //       )
  //   })
  //   return promise
  // }


}
