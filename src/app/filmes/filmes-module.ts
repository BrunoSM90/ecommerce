import { SharedModule } from './../shared/shared-module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FilmesFilterPipe } from './../pipes/filmes-filter.pipe';

import { FilmesDetailComponent } from './filmes-detail/filmes-detail.component';
import { FilmesComponent } from './filmes.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { MoviesService } from '../services/movies.service';
import { FilmesRoutingModule } from './filmes-routing-module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FilmesRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        FilmesFilterPipe,
        FilmesComponent,
        FilmesDetailComponent,
        FilmeFormComponent
    ],
    providers: [
        MoviesService,
    ]
})

export class FilmesModule {}
