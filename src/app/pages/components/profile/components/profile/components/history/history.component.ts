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

  transactions = [{
    method: "Buy",
    date: "25 March",
    productname: "Gold",
    quantity: "1 gram",
    price: "Rp.850.000"
  },{
    method: "Buy",
    date: "25 March",
    productname: "Gold",
    quantity: "1 gram",
    price: "Rp.850.000"

  }
  ,{
    method: "Buy",
    date: "25 March",
    productname: "Gold",
    quantity: "1 gram",
    price: "Rp.850.000"
  }
]

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
        // price: response[0].price,
        // quantityInGram: response.purchaseDetails.quantityInGram,
        // productName: response.purchaseDetails[0].pocket.pocketName
      }
      console.log(data);

      console.log(response);
      console.log(response[0].purchaseDate);

      this.historyPuchases = response
      console.log('#########');

      console.log(this.historyPuchases);






    })

  }

}
