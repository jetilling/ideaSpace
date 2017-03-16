import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { landingPageComponent } from './landingPage/landing-page.component';

//Routing

//Modules

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    landingPageComponent
  ],
  providers: [],
  bootstrap: [ landingPageComponent ]
})

export class AppModule {}
