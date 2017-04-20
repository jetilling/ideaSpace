import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'auth-stuff',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  loginForm = true;
  signupForm = false;
  switchFormsText = "Or Sign-up 'n Stuff"

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
