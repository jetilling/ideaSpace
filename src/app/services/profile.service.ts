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
export class ProfileService
{

  constructor(private http: Http,
              private common: CommonFunctions,
              private router: Router) {}


}
