import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sampleDate: Date = new Date()


  constructor(
    private readonly serializer: UrlSerializer,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }


}
