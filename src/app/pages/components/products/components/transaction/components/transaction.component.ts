import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../service/products.service';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  pocketId:string
  form: FormGroup
  data : any[]
  customerId: string = sessionStorage.getItem('id')
  purchaseType: string = this.route.snapshot.paramMap.get('purchaseType')
  quantityInGram: number = +this.route.snapshot.paramMap.get('quantityInGram')
  productId: string = sessionStorage.getItem('productId')
  price: number = +this.route.snapshot.paramMap.get('price')
  purchaseDetail: any
  total : number


  constructor(
    private readonly transactionService: TransactionService,
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      pockets: [null]
    });
    this.getPocketByCustIdProdId(this.productId)
    console.log(this.pocketId);
    this.total = this.quantityInGram*this.price

  }

  purchase(){
    this.purchaseDetail = {
      purchaseType : this.purchaseType,
      purchaseDetails: [
        {
          quantityInGram: this.quantityInGram,
          pocket: {
            id: this.form.value.pockets
          }
        }
      ]
    }
    this.transactionService.purchase(this.customerId, this.purchaseDetail).subscribe((response) => {
      alert('Congratulation Success Transaction!')
    })
  }

  getPocketByCustIdProdId(productId: string){
    this.productsService.getPocketByCustIdProdId(this.customerId, productId).subscribe((response) => {
      this.data = response;
      console.log(this.data);

    })
  }

}
