import { Component }    from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService) { }

  register() {
      this.loading = true;
      this.auth.create(this.model)
           .subscribe(
               res => {
          //         this.alertService.success('Registration successful', true);
                   console.log("STUFF: ", res);
                   if (res && res.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('TellTova_User', res.token);
                    }
          //         //this.router.navigate(['/login']);
        },
              error => {
                  console.log("error", error);
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
