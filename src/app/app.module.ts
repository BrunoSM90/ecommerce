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
import { FilmesDetailComponent } from './filmes/filmes-detail/filmes-detail.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { AboutComponent } from './home/about/about.component';
import { BuscaComponent } from './busca/busca.component';
import { FilmesFilterPipe } from './pipes/filmes-filter.pipe';
import { SeriesFilterPipe } from './pipes/series-filter.pipe';
import { FootbarComponent } from './footbar/footbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    SeriesComponent,
    HomeComponent,
    NavbarComponent,
    FilmesDetailComponent,
    SeriesDetailComponent,
    AboutComponent,
    BuscaComponent,
    FilmesFilterPipe,
    SeriesFilterPipe,
    FootbarComponent
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
