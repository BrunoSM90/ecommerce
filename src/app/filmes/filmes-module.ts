import { SharedModule } from './../shared/shared-module';
import { NgModule } from '@angular/core';

import { FilmesDetailComponent } from './filmes-detail/filmes-detail.component';
import { FilmesComponent } from './filmes.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmesRoutingModule } from './filmes-routing-module';


@NgModule({
    imports: [
        FilmesRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        FilmesComponent,
        FilmesDetailComponent,
        FilmeFormComponent
    ],
    providers: []
})

export class FilmesModule {}
