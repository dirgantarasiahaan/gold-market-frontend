import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tasks: Login = {
    username: '',
    password: ''
  }

  async setTasks(task: Login): Promise<void>{
    this.tasks = task;

    return new Promise((resolve ) => {
      setTimeout(() => resolve(), 1000)
    });
  }

  async getTasks(): Promise<Login>{
    return new Promise((resolve ) => {
      setTimeout(() => resolve(this.tasks), 1000)
    });
  }

  constructor() { }
}
