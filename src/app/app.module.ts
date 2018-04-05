import { ProductPipe } from './shared/pipes/product.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ProdutosComponent } from './products/produtos/produtos.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './shared/services/product.service';
import { FootbarComponent } from './footbar/footbar/footbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProdutosComponent,
    CartComponent,
    ProductPipe,
    FootbarComponent
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
    ProductService
],

  bootstrap: [AppComponent]
})
export class AppModule { }
