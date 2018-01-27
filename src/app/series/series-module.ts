import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared-module';
import { SeriesRoutingModule } from './series-routing-module';

import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesComponent } from './series.component';
import { SerieformComponent } from './serieform/serieform.component';


@NgModule ({
    imports: [
        SeriesRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        SeriesComponent,
        SeriesDetailComponent,
        SerieformComponent
    ],
    providers: [],
})

export class SeriesModule {}
