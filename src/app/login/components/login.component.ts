import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() outputTask: EventEmitter<Login> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router) { }

  form: FormGroup;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  // Login(): void {
  //   console.log(`Tasks: ${this.loginForm.value}`);
  //   const { username, password } = this.loginForm.value

  //   const login: Login = {
  //     username,
  //     password
  //   }

  //   this.outputTask.emit(login)
  //   this.loginService.setTasks(login)
  //     .then(() => this.loginService.getTasks())
  //     .then((tasks) => {
  //       console.log(tasks)
  //       sessionStorage.setItem('USER-DATA', JSON.stringify(tasks))
  //     }
  //     )
  // }


  submitForm(): void {
    if(this.form.valid){
      const credentials = this.form.value
      const redirectBackUrl = sessionStorage.getItem('redirectBackUrl')

      this.loginService.login({
        email: credentials.username,
        password: credentials.password
      }).subscribe((token) =>{
        if (token) {
          sessionStorage.setItem('credentials', token);
          this.router.navigateByUrl(redirectBackUrl || '/')
        }
      },
      (error) => {
        const message = error.error;
        alert(message.error)
      })
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}
