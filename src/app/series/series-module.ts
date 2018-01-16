import { SeriesFilterPipe } from './../pipes/series-filter.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeriesRoutingModule } from './series-routing-module';
import { SeriesService } from './../services/series.service';

import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesComponent } from './series.component';

@NgModule ({
    imports: [
        SeriesRoutingModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        SeriesComponent,
        SeriesDetailComponent,
        SeriesFilterPipe,
    ],
    providers: [
        SeriesService
    ],
})

export class SeriesModule {}
