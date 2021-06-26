import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CorouselComponent } from './components/corousel/corousel.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [HomeComponent, CorouselComponent, BenefitComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule

  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
