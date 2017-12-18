import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FilmesComponent } from './filmes.component';
import { FilmesDetailComponent } from './filmes-detail/filmes-detail.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';

const filmesRoutes: Routes = [

    {path: 'filmes',
    component: FilmesComponent,
    children: [{
        path: 'novo',
        component: FilmeFormComponent,
    }]

    },
    {path: 'filme/:id', component: FilmesDetailComponent},
];


@NgModule({
    imports: [RouterModule.forChild(filmesRoutes)],
    exports: [RouterModule],
})
export class FilmesRoutingModule {}
