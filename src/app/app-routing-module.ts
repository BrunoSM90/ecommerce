import { NgModule } from '@angular/core';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { FilmesDetailComponent } from './filmes/filmes-detail/filmes-detail.component';
import { BuscaComponent } from './busca/busca.component';
import { AboutComponent } from './home/about/about.component';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'filmes', component: FilmesComponent },
    {path: 'series', component: SeriesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'busca', component: BuscaComponent},
    {path: 'filme/:id', component: FilmesDetailComponent},
    {path: 'serie/:id', component: SeriesDetailComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
