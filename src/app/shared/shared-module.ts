import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormdebugComponent } from './formdebug/formdebug.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesService } from '././services/series.service';
import { MoviesService } from '././services/movies.service';
import { SeriesFilterPipe } from '././pipes/series-filter.pipe';
import { FilmesFilterPipe } from '././pipes/filmes-filter.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        FormdebugComponent,
        NotfoundComponent,
        FormFieldErrorComponent,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        FormsModule,
        FilmesFilterPipe,
        SeriesFilterPipe,
    ],
    declarations: [
        FilmesFilterPipe,
        SeriesFilterPipe,
        FormdebugComponent,
        NotfoundComponent,
        FormFieldErrorComponent
    ],
    providers: [
        MoviesService, SeriesService
    ]
})

export class SharedModule {}
