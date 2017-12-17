import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SeriesModule } from './series/series-module';
import { FilmesModule } from './filmes/filmes-module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { BuscaComponent } from './busca/busca.component';
import { FootbarComponent } from './footbar/footbar.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    BuscaComponent,
    FootbarComponent,
    FilmeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilmesModule,
    SeriesModule
  ],
  providers: [

],

  bootstrap: [AppComponent]
})
export class AppModule { }
