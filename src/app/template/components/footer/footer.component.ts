import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sosialMedia: string[] = ['../../../../assets/facebook.png', '../../../../assets/twitter.png', '../../../../assets/instagram.png' ]
  mandiriLogo : string = '../../../../assets/Mandiri_logo.png';
  link: string[] = ['Home', 'Event', 'About', 'Contact']
  constructor() { }

  ngOnInit(): void {
  }

}
