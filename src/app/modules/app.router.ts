import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {AppComponent } from '../app.component';

import { HomeComponent } from '../components/home.component';
import { TechComponent } from '../components/tech/teh.component';
import { ErrorComponent } from '../components/error/error.component';
import { ReachUsComponent } from '../components/reachus/reach-us.component';
import { LoginComponent } from '../components/login/login.component';


@NgModule   ({
  imports: [
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'tech', component: TechComponent},
        {path: 'reach', component: ReachUsComponent},
        {path: 'login', component: LoginComponent},
        {path: '**', component: ErrorComponent}
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
