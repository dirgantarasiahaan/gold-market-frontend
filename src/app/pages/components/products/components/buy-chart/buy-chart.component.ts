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

  constructor(
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductHistoryPrice('8a68e47278fdeeed0178fdf13eef0002')
  }

  getProductHistoryPrice(productId: string){
    this.productsService.getProductHistoryPrice(productId).then((response:any) => {
        this.prices = response
    })
  }

  increment(){
    this.no++;
    console.log(this.no++);

  }



}
