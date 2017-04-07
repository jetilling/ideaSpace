import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { User, ISignupData }                        from '../interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(email: string, password: string) {
      return this.http.post('/auth/login', JSON.stringify({ email: email, password: password }))
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              console.log("Login: ", response);
              let user = response.json();
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('TellTova_User', JSON.stringify(user));
              }
          });
  }

  create(user: User): Observable<User> {
    console.log(user);
    const url = '/auth/signup';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(user), options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('TellTova_User');
  }

  private jwt() {
       // create authorization header with jwt token
       let tellTovaUser = JSON.parse(localStorage.getItem('TellTova_User'));
       if (tellTovaUser && tellTovaUser.token) {
           let headers = new Headers({ 'Authorization': 'Bearer ' + tellTovaUser.token });
           console.log(headers);
           return new RequestOptions({ headers: headers });
       }
   }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
