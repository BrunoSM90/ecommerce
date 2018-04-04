import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth-guard.service';
import { LoginAuthService } from './login-auth.service';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './products/produtos/produtos.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    ProdutosComponent,
    PaymentComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginAuthService,
    AuthGuard
],

  bootstrap: [AppComponent]
})
export class AppModule { }
