namespace Tova
{
  export interface IDashboardService
  {
    /**
    * Publishes new post
    * @param {string} title - Title of the post
    * @param {string} post - Body of the post
    * @param {string} id - User's id
    * @param {IStyles} titleStyles - User defined styles for title of post
    * @param {Istyles} bodyStyles - User defined styles for body of post
    */
    publishNewPost: (title: string, 
                     post: string, 
                     id: string, 
                     titleStyles: IStyles, 
                     bodyStyles: IStyles) => Observable<string>,
   
    /**
     * Logs user out
     */
    logout: () => boolean
  }
}

//--------Angular Imports---------//
import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';

//--------Other Imports----------//
import { CommonFunctions }                          from '../services/commonFunctions.service';
import { Observable }                               from 'rxjs/Observable';
import { IStyles, IPostObject }                     from '../interfaces';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService implements Tova.IDashboardService
{

  constructor(private http: Http,
              private common: CommonFunctions) {}

  publishNewPost(title: string, post: string, id: string, titleStyles: IStyles, bodyStyles: IStyles): Observable<string> 
  {
    const postObject: IPostObject = {
      title: title,
      post: post,
      id: id,
      titleStyles: titleStyles,
      bodyStyles: bodyStyles
    }
    console.log(postObject)
    let url = '/api/publishNewPost';
    return this.http.post(url, postObject, this.common.jwt())
        .map(this.common.extractData)
        .catch(this.common.handleError)
  }

  logout(): boolean 
  {
    localStorage.removeItem('id')
    document.cookie = 'TellTova_User=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    return true;
  }


}
