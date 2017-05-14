import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';

import { CommonFunctions }                          from '../services/commonFunctions.service';
import { Observable }                               from 'rxjs/Observable';
import { IStyles }                                   from '../interfaces';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private http: Http,
              private common: CommonFunctions) {}

  publishNewPost(title: string, post: string, id: string, titleStyles: IStyles, bodyStyles: IStyles): Observable<string> {
    const url = '/api/publishNewPost';
    return this.http.post(url, JSON.stringify(post), this.common.jwt())
        .map(this.common.extractData)
        .catch(this.common.handleError)
  }


}
