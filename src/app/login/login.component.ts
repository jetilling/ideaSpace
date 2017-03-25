import { Component, OnInit }                             from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import {Router}                                          from '@angular/router';
import { AuthService }                                   from 'ng2-ui-auth';
import { ILoginData }                                    from '../interfaces';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              private fb: FormBuilder){}


  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(7)]),
      password: new FormControl('', [Validators.requied, Validators.minLength(8)])
    })
  }

  login(loginData: ILoginData){
    this.auth.login(loginData)
      .subscribe({
        error: (err: any) => this.ed.handleError(err),
        complete: () => this.router.navigateByUrl('dashboard')
      });
  }

}
