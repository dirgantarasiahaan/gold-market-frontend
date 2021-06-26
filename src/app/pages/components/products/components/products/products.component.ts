import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productId:number;
  search:string;
  product: string = ''
  title: string = ''
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.search = queryParams.search || 'platinum'
      this.productId = queryParams.productId || 1;

      if(this.search == 'gold' && this.productId == 2){
        this.product = '../../../../../../assets/2.png'
        this.title = 'Gold'
      } else if(this.search == 'platinum' && this.productId == 1){
        this.product = '../../../../../../assets/1.png'
        this.title = 'Platinum'
      } else {
        this.product = '../../../../../../assets/3.png'
        this.title = 'Silver'
      }

    })
  }

  active: string = 'buy'



  products(pageId:number): void{

  }

}
