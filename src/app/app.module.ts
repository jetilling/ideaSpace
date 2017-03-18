import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

//Components
import { landingPageComponent } from './landingPage/landing-page.component';
import { loginComponent }       from './login/login.component';
import { signupComponent }      from './signup/signup.component';

//Routing

//Modules

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    landingPageComponent,
    loginComponent,
    signupComponent
  ],
  providers: [],
  bootstrap: [ landingPageComponent ]
})

export class AppModule {}
