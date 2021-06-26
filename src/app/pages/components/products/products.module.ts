import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { BuyGoldComponent } from './components/buy-gold/buy-gold.component';
import { SellGoldComponent } from './components/sell-gold/sell-gold.component';
@NgModule({
  declarations: [
    ProductsComponent,
    BuyGoldComponent,
    SellGoldComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
