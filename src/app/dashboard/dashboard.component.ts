import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../services/index';

interface event {
  keyCode: number,
  key: string
}

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  boldDecorator: string;
  boldRegex: any = /(@Bold\(.+\))+/g;
  newPost: string;

  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService) { }

  onKeyUp(newPost: string) {
    if (this.boldRegex.test(newPost)){

        this.newPost = newPost.replace(this.boldRegex, "BOLD")

    }

  }



  logout() {
      document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      this.router.navigate(['/login'])
  }

  publish(post: string){
    console.log(post)
  }

}
