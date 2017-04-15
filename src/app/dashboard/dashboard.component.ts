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
      localStorage.removeItem('TellTova_User');
      this.router.navigate(['/signup'])
  }


}
