import { Component, OnInit } from '@angular/core';
import { PurchaseDetail } from '../models/purchase-detail';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  purchaseDetail: any = {
    purchaseType : '1',
    purchaseDetails: [
      {
        quantityInGram: '1',
        pocket: {
          id: '4028e4907912fcd6017912ff68440001'
        }
      }
    ]
  }

  constructor(
    private readonly transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.purchase('8a68e47278f8d7b30178f8d865960001', this.purchaseDetail)
  }

  purchase(customerId: string, payload: PurchaseDetail){

    customerId = '8a68e47278f8d7b30178f8d865960001'
    // payload.purchaseType = '1'
    // payload.purchaseDetails[0].quantityInGram = '1'
    // payload.purchaseDetails[0].pocket = { id: '4028e4907912fcd6017912ff68440001' }

    console.log('Testtttttttt');
    this.transactionService.purchase(customerId,  this.purchaseDetail).subscribe((response) => {


    })
  }

}
