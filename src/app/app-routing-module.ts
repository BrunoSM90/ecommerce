import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './products/produtos/produtos.component';


const appRoutes: Routes = [
    {path: '', component: ProdutosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProdutosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
