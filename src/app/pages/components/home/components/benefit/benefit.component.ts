import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

  productBenefits = [
    {
      title: 'Legality',
      message: 'We commit to keep your trusted with legality transaction.'
    },
    {
      title: 'Price',
      message: 'Good quality with the best prices.'
    },
    {
      title: 'Brand',
      message: 'Our product is the best on quality and brand.'
    }
  ]

  serviceBenefits = [
    {
      title: 'Delivery',
      message: 'We have free delivery service to all city in indonesia.'
    },
    {
      title: 'Reward',
      message: 'More transaction more point and reward.'
    },
    {
      title: 'Transaction',
      message: 'Our transaction is simple and secure.'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
