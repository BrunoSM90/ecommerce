import { AuthGuard } from './auth-guard.service';
import { LoginAuthService } from './services/login-auth.service';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './login/login.component';
import { MovieformComponent } from './movieform/movieform.component';
import { SerieformComponent } from './serieform/serieform.component';
import { FormdebugComponent } from './formdebug/formdebug.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    MovieformComponent,
    SerieformComponent,
    FormdebugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoginAuthService,
    AuthGuard
],

  bootstrap: [AppComponent]
})
export class AppModule { }
