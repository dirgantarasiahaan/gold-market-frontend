import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../models/customer';
import { ProfileService } from '../template-profile/services/profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  title: string = 'Setting Profile'
  customerId: string = sessionStorage.getItem('id')
  firstName: string
  lastName: string
  email:string
  address: string
  phone:string
  birthDate: string
  username: string
  status:string
  password: string
  form:FormGroup

  constructor(
    private readonly service: ProfileService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({

    })
  }

  ngOnInit(): void {
    this.getUser()
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastname: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl(''),
      birthDate: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl('')
    })
  }

  getUser(){
    this.service.getUserById(this.customerId).subscribe((response:any) => {
        this.firstName = response.firstName
        this.lastName = response.lastName
        this.email = response.email
        this.birthDate = response.birthDate
        this.phone = response.phoneNumber
        this.address = response.address
        this.username = response.username
        this.password = response.password
        this.status = response.status
    })
  }

  editUserByCustId(){
    const customer: Customer = this.form.value
    customer.id = this.customerId
    this.service.updateUserById(customer).subscribe((response) => {
      alert('Success Updated')
    })
  }
}
