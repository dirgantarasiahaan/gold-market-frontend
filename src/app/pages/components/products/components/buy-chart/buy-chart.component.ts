import { Component, OnInit } from '@angular/core';
import { HistoryPrice } from '../../models/history-price';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-buy-chart',
  templateUrl: './buy-chart.component.html',
  styleUrls: ['./buy-chart.component.scss']
})
export class BuyChartComponent implements OnInit {

  prices: HistoryPrice[];
  no: number = 0
  productId: string = sessionStorage.getItem('productId')

  constructor(
    private readonly productsService: ProductsService
  ) { }



  ngOnInit(): void {
    this.getProductHistoryPrice(this.productId)
  }

  getProductHistoryPrice(productId: string){
    this.productsService.getProductHistoryPrice(productId).subscribe((response) => {
        this.prices = response
    })
  }

}
