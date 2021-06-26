import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [TemplateComponent, FooterComponent, HeaderComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
