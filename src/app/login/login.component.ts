import { Component, OnInit }                             from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import {Router}                                          from '@angular/router';
import { AuthService }                                   from '../services/auth.service';
import { ILoginData }                                     from '../interfaces';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router){}


  ngOnInit() {

  }

  onLogin(email: string, password: string) {
    this.auth.login(email, password);
  }


}
