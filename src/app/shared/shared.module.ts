import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDirective } from './directives/navbar/navbar.directive';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { LoginService } from './service/login/login.service';

const PIPES = [RelativeDatePipe, CamelCasePipe]
const DIRECTIVES = [NavbarDirective]
const SERVICES = [LoginService]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES,
    CamelCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule { }
