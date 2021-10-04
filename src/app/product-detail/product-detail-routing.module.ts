import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'item',
        pathMatch: 'full'
      },
      {
        path: 'item',
        component: ItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
