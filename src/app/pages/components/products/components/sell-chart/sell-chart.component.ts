import { Component, OnInit } from '@angular/core';
import { HistoryPrice } from '../../models/history-price';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-sell-chart',
  templateUrl: './sell-chart.component.html',
  styleUrls: ['./sell-chart.component.scss']
})
export class SellChartComponent implements OnInit {

  prices: HistoryPrice[];
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
