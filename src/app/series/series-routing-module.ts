import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SeriesComponent } from './series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SerieformComponent } from './serieform/serieform.component';

const seriesRoutes: Routes = [

    {path: '', component: SeriesComponent, children: [
       { path: 'novo', component: SerieformComponent }
    ]},
    {path: ':id', component: SeriesDetailComponent},
];


@NgModule({
    imports: [RouterModule.forChild(seriesRoutes)],
    exports: [RouterModule],
})
export class SeriesRoutingModule {}
