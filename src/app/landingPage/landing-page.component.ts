import { Component, OnInit }      from '@angular/core';
import { Router } from '@angular/router';

import { AuthService }            from '../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'idea-space',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  title: string = 'Tova';

  constructor(private auth: AuthService){};

  ngOnInit() {

  }





}
