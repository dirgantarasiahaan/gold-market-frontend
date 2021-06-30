import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { BuyGoldComponent } from './components/buy-gold/buy-gold.component';
import { SellGoldComponent } from './components/sell-gold/sell-gold.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionModule } from './components/transaction/transaction.module';
import { BuyChartComponent } from './components/buy-chart/buy-chart.component';
import { SellChartComponent } from './components/sell-chart/sell-chart.component';




@NgModule({
  declarations: [
    ProductsComponent,
    BuyGoldComponent,
    SellGoldComponent,
    BuyChartComponent,
    SellChartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionModule,

  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
