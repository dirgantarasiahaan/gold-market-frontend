import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';

import { Products } from '../../models/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  form: FormGroup;
  data: any[];
  productId: string = sessionStorage.getItem('productId')
  search:string = sessionStorage.getItem('productName')
  product: string
  title: string = ''
  pocket: Products;
  pocketName: string
  id: string;
  pocketQty: number
  sell: string;
  buy: string = 'active'
  chartSell: string = 'btn btn-light'
  chartBuy: string = 'btn btn-primary'
  customerId: string = sessionStorage.getItem('id')


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.search = queryParams.search || ''
      this.productId = queryParams.productId || 0;
      this.getPocketByCustIdProdId(this.productId)
      this.product = '../../../../../../assets/2.png'
      this.initForm();
    })
  }

  refresh(customerId:string): void{
    this.productsService.getAll(customerId).subscribe((response) => {
      this.data = response;
    })
  }

  initForm(){
    this.form = new FormGroup({
      pocketName: new FormControl(null, [Validators.required]),
      pocketQty: new FormControl(null, [Validators.required]),
      totalAmount: new FormControl(null, [Validators.required])
    })
  }

  addPocket(): void {
    const products: Products = this.form.value;
    products.product = { id: '8a68e47278fdeeed0178fdf13eef0002'}
    products.pocketQty = 0.0
    products.customer = { id: this.customerId }
    this.productsService.addPocket(products).subscribe((response) => {
      alert(`product ${response.pocketName} has been saved`)
      this.ngOnInit()
    })
  }

  deletePocket(pocketId: string): void {
    this.productsService.deletePocket(pocketId).subscribe((response) => {
      alert('Success Deleted')
      this.ngOnInit()
    })
  }

  updatePocket(pocketName: string){
    const pocket: Products = this.form.value;
    pocket.id = this.id
    pocket.pocketName = pocket.pocketName
    pocket.pocketQty = this.pocketQty
    pocket.customer = { id: this.customerId }
    pocket.product = { id: '8a68e47278fdeeed0178fdf13eef0002'}
    this.productsService.updatePocketById(pocket).subscribe((response) => {

      alert('success update')
      this.ngOnInit()
    })

  }

  getPocketById(pocketId: string){
    this.productsService.getPocketById(pocketId).subscribe((response) => {
      this.id = response.id
      this.pocketName = response.pocketName
      this.pocketQty = response.pocketQty
    })
  }

  changeActive(activeate: string){
    if(activeate == 'buy'){
        this.buy = 'active'
        this.sell = ''
    } else {
      this.buy = ''
        this.sell = 'active'
    }
  }



  getPocketByCustIdProdId(productId: string){
    this.productsService.getPocketByCustIdProdId(this.customerId, productId).subscribe((response) => {
      this.data = response;
      console.log(this.data);

    })


  }


  changeChart(chart: string){
    if(chart === 'buy'){
      this.chartBuy = 'btn btn-primary'
      this.chartSell = 'btn btn-light'
    } else {
      this.chartSell = 'btn btn-primary'
      this.chartBuy = 'btn btn-light'
    }
  }
}
