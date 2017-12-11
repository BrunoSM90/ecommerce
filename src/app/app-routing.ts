import { FilmesDetailComponent } from './filmes/filmes-detail/filmes-detail.component';
import { BuscaComponent } from './busca/busca.component';
import { AboutComponent } from './home/about/about.component';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'filmes', component: FilmesComponent },
    {path: 'series', component: SeriesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'busca', component: BuscaComponent},
    {path: 'filme/:id', component: FilmesDetailComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
