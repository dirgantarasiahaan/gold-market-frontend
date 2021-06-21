import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from './model/login';
import { LoginService } from './service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @Output() outputTask: EventEmitter<Login> = new EventEmitter();

  constructor(private readonly loginService: LoginService) { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  Login(): void {
    console.log(`Tasks: ${this.loginForm.value}`);
    const { username, password } = this.loginForm.value

    const login: Login = {
      username,
      password
    }

    this.outputTask.emit(login)
    this.loginService.setTasks(login)
      .then(() => this.loginService.getTasks())
      .then((tasks) => {
        console.log(tasks)
        sessionStorage.setItem('USER-DATA', JSON.stringify(tasks))
      }
      )
  }

  ngOnInit(): void {
  }
}
