import { Component, OnInit }    from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  loginForm: boolean = true;
  signupForm: boolean = false;

  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService) { }

  ngOnInit() {
  }

  switchForms() {
    this.loginForm = false;
    this.signupForm = true;
  }

  register() {
      this.loading = true;
      this.auth.create(this.model)
           .subscribe(
               res => {
                   this.alertService.success('Registration successful', true);
                   if (res && res.token) {
                        localStorage.setItem('TellTova_User', res.token);
                    }
                   this.router.navigate(['/dashboard']);
        },
              error => {
                  console.log("error", error);
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
