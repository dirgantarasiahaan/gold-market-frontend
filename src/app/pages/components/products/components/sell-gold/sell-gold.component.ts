import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryPrice } from '../../models/history-price';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-sell-gold',
  templateUrl: './sell-gold.component.html',
  styleUrls: ['./sell-gold.component.scss']
})
export class SellGoldComponent implements OnInit {

  formTransaction: FormGroup
  data: any
  productId: string = sessionStorage.getItem('productId')
  idr: number
  onGram: number
  prices: HistoryPrice[];
  currentPrice: number

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) {
    this.formTransaction = this.fb.group({
      idr: [],
      valueOnGram: []
    })
  }

  ngOnInit(): void {
    this.initForm()
    this.getProductHistoryPrice(this.productId);
  }

  initForm(){
    this.formTransaction = new FormGroup({
      idr: new FormControl(''),
      valueOnGram: new FormControl('')
    })
  }

  detailItem(){
    console.log(this.formTransaction.value);
    this.router.navigate([
      '/products/transaction',
      {
        purchaseType: '1',
        quantityInGram: this.formTransaction.value.valueOnGram,
        productId: this.productId,
        price: this.currentPrice
      }
    ])
  }

  getProductHistoryPrice(productId: string){
    this.productsService.getProductHistoryPrice(productId).subscribe((response) => {
        this.prices = response
        this.currentPrice = response[response.length - 1].priceSell;
    })
  }

}
