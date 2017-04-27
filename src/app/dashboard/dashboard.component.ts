import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../services/index';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService) { }

  logout() {
      document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      this.router.navigate(['/login'])
  }


}
