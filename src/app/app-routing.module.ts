import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home').then((m) => m.HomeModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories').then((m) => m.CategoriesModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./product-detail').then((m) => m.ProductDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
