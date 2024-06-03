import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'new-product', loadChildren: () => import('./pages/new-product/new-product.module').then(m => m.NewProductModule) },
  { path: 'product', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },
  { path: 'product-card', loadChildren: () => import('./webviews/product-card/product-card.module').then(m => m.ProductCardModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }