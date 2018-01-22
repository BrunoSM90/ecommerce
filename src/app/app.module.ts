import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth-guard.service';
import { LoginAuthService } from './services/login-auth.service';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './login/login.component';
import { SerieformComponent } from './serieform/serieform.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared-module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    SerieformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginAuthService,
    AuthGuard
],

  bootstrap: [AppComponent]
})
export class AppModule { }
