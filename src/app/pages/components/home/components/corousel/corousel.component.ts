import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit {

  corousel = [
    {
      title: 'Gold Investment',
      message: 'Invest your assets and wealth in gold',
      image: '../../../../assets/carousel-1.png'
    },
    {
      title: 'Gold Investment',
      message: 'Invest your assets and wealth in gold',
      image: '../../../../assets/carousel-2.png'
    },
    {
      title: 'Gold Investment',
      message: 'Invest your assets and wealth in gold',
      image: '../../../../assets/carousel-3.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

  

}
