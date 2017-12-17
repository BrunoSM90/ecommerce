import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SeriesComponent } from './series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

const seriesRoutes: Routes = [

    {path: 'series', component: SeriesComponent},
    {path: 'serie/:id', component: SeriesDetailComponent}
];


@NgModule({
    imports: [RouterModule.forChild(seriesRoutes)],
    exports: [RouterModule],
})
export class SeriesRoutingModule {}
