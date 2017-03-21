import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

//Components
import { LandingPageComponent } from './landingPage/landing-page.component';
import { LoginComponent }       from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';

//Routing
import { AppRoutingModule }        from './app-routing.module';

//Modules

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent
  ],
  providers: [],
  bootstrap: [ LandingPageComponent ]
})

export class AppModule {}
