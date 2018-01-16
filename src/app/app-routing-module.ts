import { CanActivate } from '@angular/router/src/interfaces';
import { AuthGuard } from './auth-guard.service';
import { NgModule,  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieformComponent } from './serieform/serieform.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'filmes', canActivate: [AuthGuard], canLoad: [AuthGuard], loadChildren: 'app/filmes/filmes-module#FilmesModule'},
    {path: 'series', canActivate: [AuthGuard], canLoad: [AuthGuard], loadChildren: 'app/series/series-module#SeriesModule'},
    {path: 'formulario', component: SerieformComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
