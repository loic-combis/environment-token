import { Component, Inject, OnInit } from '@angular/core';

import { Environment, ENVIRONMENT } from '@environment-token/environment';

@Component({
  selector: 'environment-token-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  mainColor: string;

  constructor(@Inject(ENVIRONMENT) private env: Environment) { }

  ngOnInit(): void {
    this.name = this.env.name;
    this.mainColor = this.env.mainColor;
  }

}
