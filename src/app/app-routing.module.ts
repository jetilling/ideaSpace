import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';
// import { LoginComponent }       from './auth/login/login.component';
// import { SignupComponent }      from './auth/signup/signup.component';
import { AuthComponent }        from './auth/auth.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news',     component: NewsComponent },
  // { path: 'login',  component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'knock_knock', component: AuthComponent},
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
