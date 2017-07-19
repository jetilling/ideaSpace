//--------Angular Imports---------//
import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { Router }                                   from '@angular/router';

//--------Other Imports----------//
import { CommonFunctions }                          from '../services/commonFunctions.service';
import { Observable }                               from 'rxjs/Observable';
import { IStyles, IPostObject }                     from '../interfaces';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService
{

  constructor(private http: Http,
              private common: CommonFunctions,
              private router: Router) {}

  publishNewPost(title: string, post: string, id: string, titleStyles: IStyles, bodyStyles: IStyles)
  {
    let identificationString: string = ""
    const postObject: IPostObject = {
      title: title,
      post: post,
      id: id,
      titleStyles: titleStyles,
      bodyStyles: bodyStyles,
      identificationString: identificationString
    }
    let url = '/api/publishNewPost';
    this.http.post(url, postObject, this.common.jwt())
        .map(
          (res: Response) => {
            let body = res.json();
            console.log(body)
            let returnObject = {
              displayName: body[0].displayname
            }
            return returnObject || { }
          }
        )
        .subscribe(
          (res: any) => {
            if (res) this.router.navigate(['/profile', res.displayName])
          }
        )
  }

  logout(): boolean 
  {
    localStorage.removeItem('id')
    document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    return true;
  }


}
