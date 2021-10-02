import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  declarations: [ProductDetailComponent, ItemComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailRoutingModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
