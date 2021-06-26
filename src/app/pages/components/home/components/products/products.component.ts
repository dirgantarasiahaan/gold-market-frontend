import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  title: string = 'our products'

  products = [
    {
      title: 'platinum investment',
      image: '../../../../assets/1.png'
    },
    {
      title: 'gold investment',
      image: '../../../../assets/2.png'
    },
    {
      title: 'silver investment',
      image: '../../../../assets/3.png'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
