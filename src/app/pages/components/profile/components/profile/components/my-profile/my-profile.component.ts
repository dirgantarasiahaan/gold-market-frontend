import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/model/login';
import { ProfileService } from '../template-profile/services/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  customerId: string = sessionStorage.getItem('id')
  firstName: string
  lastName: string
  email:string
  address: string
  phone:string
  birthDate: string

  constructor(
    private readonly service: ProfileService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  title: string = 'My Profile'

  getUser(){
    this.service.getUserById(this.customerId).subscribe((response:any) => {
        this.firstName = response.firstName
        this.lastName = response.lastName
        this.email = response.email
        this.birthDate = response.birthDate
        this.phone = response.phoneNumber
        this.address = response.address
    })
  }

}
