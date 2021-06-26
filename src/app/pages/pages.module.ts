import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TemplateModule } from '../template/template.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginService } from '../login/service/login.service';

const COMPONENTS:any = [
  PagesComponent
]

  const SERVICES = [LoginService]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    TemplateModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent
  ],
  providers: [
    ...SERVICES
  ]
})
export class PagesModule { }
