import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';
import { LoginComponent }       from './login/login.component';
import { SignupComponent }      from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news',     component: NewsComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
