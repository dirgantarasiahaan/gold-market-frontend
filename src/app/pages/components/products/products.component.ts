import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      title: 'Platinum Investment',
      image: '../../../../assets/1.png'
    },
    {
      title: 'Gold Investment',
      image: '../../../../assets/2.png'
    },
    {
      title: 'Silver Investment',
      image: '../../../../assets/3.png'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
