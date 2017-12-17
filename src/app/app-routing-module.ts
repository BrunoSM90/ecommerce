import { NgModule,  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaComponent } from './busca/busca.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'busca', component: BuscaComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
