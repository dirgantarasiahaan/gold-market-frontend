import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDirective } from './directives/navbar/navbar.directive';
import { RelativeDatePipe } from './pipes/relative-date.pipe';

const PIPES = [RelativeDatePipe]
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
