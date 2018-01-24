import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

import { SeriesFilterPipe } from './../pipes/series-filter.pipe';
import { SeriesRoutingModule } from './series-routing-module';
import { SeriesService } from './../services/series.service';

import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesComponent } from './series.component';
import { SerieformComponent } from './serieform/serieform.component';


@NgModule ({
    imports: [
        SeriesRoutingModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        SeriesComponent,
        SeriesDetailComponent,
        SeriesFilterPipe,
        SerieformComponent,
    ],
    providers: [
        SeriesService
    ],
})

export class SeriesModule {}
