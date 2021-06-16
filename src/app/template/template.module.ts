import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS: any = [TemplateComponent, FooterComponent, HeaderComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
