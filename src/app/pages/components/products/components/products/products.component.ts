import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  customerId: string
  productId:number;
  search:string;
  product: string = ''
  title: string = ''
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.search = queryParams.search || 'platinum'
      this.productId = queryParams.productId || 1;

      this.customerId = sessionStorage.getItem('id');

      if(this.search == 'gold' && this.productId == 2){
        this.product = '../../../../../../assets/2.png'
        this.title = 'Gold'

      } else if(this.search == 'platinum' && this.productId == 1){
        this.product = '../../../../../../assets/1.png'
        this.title = 'Platinum'
      } else {
        this.product = '../../../../../../assets/3.png'
        this.title = 'Silver'
      }
      this.refresh(this.customerId);
      this.initForm();

    })
  }

  active: string = 'buy'

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
    products.customer = { id: sessionStorage.getItem('id')}
    this.productsService.addPocket(products).subscribe((response) => {
      alert(`product ${response.pocketName} has been saved`)
      window.location.reload()
    })
  }

  deletePocket(pocketId: string): void {
    this.productsService.deletePocket(pocketId).subscribe((response) => {
      alert('Success Deleted')
      this.ngOnInit()
    })
  }




}
