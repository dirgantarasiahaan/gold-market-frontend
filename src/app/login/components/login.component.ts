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
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  submitForm(): void {
    if(this.form.valid){
      const credentials = this.form.value
      const redirectBackUrl = sessionStorage.getItem('redirectBackUrl')

      this.loginService.login({
        username: credentials.username,
        password: credentials.password
      }).subscribe((response:any) =>{
        if (response) {
          sessionStorage.setItem('credentials', response.token);
          sessionStorage.setItem('id', response.id);
          this.router.navigateByUrl(redirectBackUrl || '/')
        }
      },
      (error) => {
        const message = error.error;
        alert("username and password not found, Try again !")
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
