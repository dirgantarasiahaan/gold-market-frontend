import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostModule } from 'src/app/pages/post/post.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactInfoComponent } from './component/contact-info/contact-info.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    PostModule
  ], 
  exports: [
    DashboardComponent,
    NavbarComponent,
    ContactInfoComponent
  ]
})
export class DashboardModule { }
