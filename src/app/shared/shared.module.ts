import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDirective } from './directives/navbar/navbar.directive';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';

const PIPES = [RelativeDatePipe, CamelCasePipe]
const DIRECTIVES = [NavbarDirective]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
