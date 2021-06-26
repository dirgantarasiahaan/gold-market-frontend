import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  active: string;
  name: string = 'Wijaya Dodo'

  changeRoute(route: string):void{
    this.router.navigate(['/profile/' + route]).then((m) => this.refresh())
  }


  refresh():void{
      this.active = this.activatedRoute.snapshot.paramMap.get('path');
  }

}
