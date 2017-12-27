import { CanActivate } from '@angular/router/src/interfaces';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NgModule,  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'filmes', canActivate: [AuthGuard], loadChildren: 'app/filmes/filmes-module#FilmesModule'},
    {path: 'series', canActivate: [AuthGuard], loadChildren: 'app/series/series-module#SeriesModule',
     canLoad: [AuthGuard]}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
