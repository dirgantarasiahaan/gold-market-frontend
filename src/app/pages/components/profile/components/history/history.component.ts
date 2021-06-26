import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  title = 'My Transactions'
  subtitle = 'Products'

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

  constructor() { }

  ngOnInit(): void {
  }

}
