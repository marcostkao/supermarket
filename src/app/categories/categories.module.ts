import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CategoriesComponent, ProductComponent],
  imports: [CommonModule, SharedModule, CategoriesRoutingModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
