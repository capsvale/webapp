import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent} from './components/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TechComponent } from './components/tech/teh.component';
import { ReachUsComponent } from './components/reachus/reach-us.component';
import {UserService } from './services/user.service';

import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app.router';
import { LoginComponent } from './components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ErrorComponent,
    HomeComponent,
    TechComponent,
    ReachUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
