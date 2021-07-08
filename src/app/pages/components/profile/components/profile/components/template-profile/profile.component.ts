import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/login/model/login';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  customerId: string = sessionStorage.getItem('id')
  customer: Login

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: ProfileService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  active: string;
  username: string

  logout(): void{
    sessionStorage.removeItem('credentials')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('productId')
    sessionStorage.removeItem('productName')
    sessionStorage.removeItem('image')
  }

  getUser(){
    this.service.getUserById(this.customerId).subscribe((response:any) => {
        this.username = response.username
    })
  }

}
