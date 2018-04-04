import { PaymentComponent } from './payment/payment.component';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthGuard } from './auth-guard.service';
import { NgModule,  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './products/produtos/produtos.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProdutosComponent},
    {path: 'payment', component: PaymentComponent}
   // {path: 'series', canActivate: [AuthGuard], canLoad: [AuthGuard], loadChildren: 'app/series/series-module#SeriesModule'},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
