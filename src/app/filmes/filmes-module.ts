import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FilmesFilterPipe } from './../pipes/filmes-filter.pipe';

import { FilmesDetailComponent } from './filmes-detail/filmes-detail.component';
import { FilmesComponent } from './filmes.component';

import { MoviesService } from '../services/movies.service';
import { FilmesRoutingModule } from './filmes-routing-module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FilmesRoutingModule
    ],
    exports: [],
    declarations: [
        FilmesFilterPipe,
        FilmesComponent,
        FilmesDetailComponent
    ],
    providers: [
        MoviesService,
    ]
})

export class FilmesModule {}
