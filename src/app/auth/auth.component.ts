import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }       from '../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'auth-stuff',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  loginForm: boolean = true;
  signupForm: boolean = false;
  switchFormsText: string = "Or Sign-up 'n Stuff";
  tellTovaUser: string = document.cookie.split("TellTova_User=")[1];

    constructor(private auth: AuthService,
                private router: Router){}

  ngOnInit() {
    if(this.tellTovaUser && this.tellTovaUser.split('.').length === 3){
    this.auth.getUser()
      .subscribe(
        res => {
          console.log(res)
          if (res){
            //localStorage.setItem('id', res.id.toString());
            this.router.navigate(['/dashboard'])
          }
        }
      )
    }
  }

  switchForms() {
    if (this.loginForm){
      this.loginForm = false;
      this.signupForm = true;
      this.switchFormsText = "Of Login 'n Stuff";
    }
    else {
      this.loginForm = true;
      this.signupForm = false;
      this.switchFormsText = "Or Sign-up 'n Stuff"
    }
  }
}
