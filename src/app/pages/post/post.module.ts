import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldComponent } from './component/gold/gold.component';
import { PlatinumComponent } from './component/platinum/platinum.component';
import { SilverComponent } from './component/silver/silver.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { DetailComponent } from './component/detail/detail.component';
import { CorouselComponent } from './component/corousel/corousel.component';
import { ProductComponent } from './component/product/product.component';



@NgModule({
  declarations: [
    GoldComponent,
    PlatinumComponent,
    SilverComponent,
    PromotionComponent,
    DetailComponent,
    CorouselComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    GoldComponent,
    PlatinumComponent,
    SilverComponent,
    PromotionComponent,
    DetailComponent,
    CorouselComponent,
    ProductComponent
  ]
})
export class PostModule { }
