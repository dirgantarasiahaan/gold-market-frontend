import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { ProductsComponent } from './components/products/products.component';
import { TemplateModule } from '../template/template.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './components/login/service/login.service';
import { PlatinumComponent } from './components/platinum/platinum.component';
import { GoldComponent } from './components/gold/gold.component';
import { SilverComponent } from './components/silver/silver.component';

const COMPONENTS:any = [
  PagesComponent,
  CorouselComponent,
  BenefitComponent,
  ProductsComponent,
  LoginComponent]

  const SERVICES = [LoginService]

@NgModule({
  declarations: [...COMPONENTS, PlatinumComponent, GoldComponent, SilverComponent],
  imports: [
    CommonModule,
    TemplateModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    PagesComponent,
    LoginComponent
  ],
  providers: [
    ...SERVICES
  ]
})
export class PagesModule { }
