import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private readonly router: Router
  ) {
    this.formTransaction = this.fb.group({
      idr: [],
      valueOnGram: []
    })
  }

  ngOnInit(): void {
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
        price: this.formTransaction.value.idr
      }
    ])
  }

}
