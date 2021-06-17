import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDirective } from './directives/navbar/navbar.directive';



@NgModule({
  declarations: [
    NavbarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarDirective
  ]
})
export class SharedModule { }
