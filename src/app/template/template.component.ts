import { Component, OnInit } from '@angular/core';
import { Product } from '../pages/components/products/models/product';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  tasks: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
