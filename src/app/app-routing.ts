import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'filmes', component: FilmesComponent },
    {path: 'series', component: SeriesComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
