import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Product } from 'src/app/pages/components/products/models/product';
import { ProductsService } from 'src/app/pages/components/products/service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  sampleDate: Date = new Date()
  customerId: string = sessionStorage.getItem('id')
  products: Product[]
  search:string
  productId:string
  pro: Product

  constructor(
    private readonly serializer: UrlSerializer,
    private readonly router: Router,
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllProductCustomer()
  }

  getAllProductCustomer(){
    this.productService.getProductsByCustomerId(this.customerId).subscribe((response) => {
      this.products = response
      console.log(this.products);
    })
  }

  getData(productId: string, search: string, image: string){
    sessionStorage.setItem('productId', productId)
    sessionStorage.setItem('productName', search )
    sessionStorage.setItem('image', image)
  }

}
