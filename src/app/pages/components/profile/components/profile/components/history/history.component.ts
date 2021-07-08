import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/pages/components/products/components/transaction/service/transaction.service';
import { History } from '../models/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  title = 'My Transactions'
  subtitle = 'Products'
  customerId: string = sessionStorage.getItem('id')

  historyPuchases: History[]

  constructor(
    private readonly service: TransactionService
  ) { }

  ngOnInit(): void {
    this.getHistory()
  }

  getHistory(){
    this.service.historyPurchases(this.customerId).subscribe((response:any) => {
      const data = {
        purchaseDate: response.purchaseDate,
        purchaseType: response.purchaseType,
        price: response.purchaseDetails
      }
      this.historyPuchases = response
    })
  }
}
