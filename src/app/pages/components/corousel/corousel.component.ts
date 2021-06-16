import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit {


  title: string[] = ['Gold Investment', 'Platinum Investment', 'Silver Investment']
  message: string[] = ['Invest your assets and g']

  constructor() { }

  ngOnInit(): void {
  }

}
