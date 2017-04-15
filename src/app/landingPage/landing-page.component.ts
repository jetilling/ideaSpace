import { Component, OnInit }      from '@angular/core';

import { LoginComponent } from '../login/login.component'

@Component({
  moduleId: module.id,
  selector: 'idea-space',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  title = 'Tova';
  ngOnInit() {

  }
}
