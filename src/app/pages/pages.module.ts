import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { ProductsComponent } from './components/products/products.component';
import { TemplateModule } from '../template/template.module';

const COMPONENTS:any = [PagesComponent, CorouselComponent, BenefitComponent, ProductsComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
