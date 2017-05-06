import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../services/index';
import { DashboardService }         from './dashboard.service';

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
  boldRegex: any = /(@Size\(.+\))+/g;
  newPost: string;
  size: number;

  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService,
      private dashboardService: DashboardService) { }

  onKeyUp(newPost: string) {
    let resultString: string;
    let finalString: string;

    if (this.boldRegex.test(newPost)){
        resultString = newPost.match(this.boldRegex)[0].slice(6)
        finalString = resultString.slice(0, resultString.length-1)
        this.newPost = newPost.replace(this.boldRegex, "")
        this.size = +finalString;

    }

  }



  logout() {
      localStorage.removeItem('id')
      document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      this.router.navigate(['/login'])
  }

  publish(title: string, post: string){
    let id: string = localStorage.getItem('id')
    console.log(title, post, id)
    this.dashboardService.publishNewPost(title, post, id)
  }

}
