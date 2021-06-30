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

  constructor(
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductHistoryPrice('8a68e47278fdeeed0178fdf13eef0002')
  }

  getProductHistoryPrice(productId: string){
    this.productsService.getProductHistoryPrice(productId).subscribe((response) => {
        this.prices = response
    })
  }

}
