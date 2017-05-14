import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthService} from '../services/index';
import { DashboardService }         from './dashboard.service';
import { IStyles }                   from '../interfaces';

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
  sizeRegex: any = /(@Size\(.+\))+/g;
  fontRegex: any = /(@Font\(.+\))+/g;
  newPost: string;
  title: string;
  bodyStyles: IStyles = {
    'font-size': '20px',
    'font-family': 'Cutive Mono'
  }
  titleStyles: IStyles = {
    'font-size': '35px',
    'font-family': 'Cutive Mono'
  }


  constructor(
      private router: Router,
      private auth: AuthService,
      private alertService: AlertService,
      private dashboardService: DashboardService) { }

  /**
  * Funtion that checks for @Size() and @Font() in post and changes styles accordingly
  * @param {string} text - content of title or post
  * @param {boolean} body - trigger that states whether text is from the title or the body
  */
  editStyles(text: string, body: boolean) {
    let resultString: string;
    let finalString: string;

    if (this.sizeRegex.test(text)){
      resultString = text.match(this.sizeRegex)[0].slice(6)
      finalString = resultString.slice(0, resultString.length-1)
      if (+finalString > 14 && +finalString < 31) {
        if (body) {
          this.newPost = text.replace(this.sizeRegex, "")
          this.bodyStyles['font-size'] = finalString + 'px';
        }
        else {
          this.title = text.replace(this.sizeRegex, "")
          this.titleStyles['font-size'] = finalString + 'px';
        }
      }
    }
    else if (this.fontRegex.test(text)){
      resultString = text.match(this.fontRegex)[0].slice(6)
      finalString = resultString.slice(0, resultString.length-1)
      if (body) {
        this.newPost = text.replace(this.fontRegex, "")
        this.bodyStyles['font-family'] = finalString
      }
      else {
        this.title = text.replace(this.fontRegex, "")
        this.titleStyles['font-family'] = finalString
      }
    }
  }


  /**
  * Logs user out
  */
  logout() {
      localStorage.removeItem('id')
      document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      this.router.navigate(['/login'])
  }

  /**
  * publishes post
  * @param {string} title - title of post
  * @param {string} body - body of post
  */
  publish(title: string, body: string){
    let id: string = localStorage.getItem('id')
    console.log(title, body, id, this.titleStyles, this.bodyStyles)
    this.dashboardService.publishNewPost(title, body, id, this.titleStyles, this.bodyStyles)
  }

}
