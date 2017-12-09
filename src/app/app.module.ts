import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SeriesService } from './services/series.service';
import { MoviesService } from './services/movies.service';

import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app-routing';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    SeriesComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
  MoviesService,
  SeriesService],

  bootstrap: [AppComponent]
})
export class AppModule { }
