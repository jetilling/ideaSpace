import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }      from '@angular/forms';
import { HttpModule, JsonpModule }       from '@angular/http';

//Components
import { LandingPageComponent } from './landingPage/landing-page.component';
import { LoginComponent }       from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

//Routing
import { AppRoutingModule }        from './app-routing.module';

//Services
import { AuthService, AlertService }          from './services/index';

//Modules


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    DashboardComponent
  ],
  providers: [
    AuthService,
    AlertService
  ],
  bootstrap: [ LandingPageComponent ]
})

export class AppModule {}
