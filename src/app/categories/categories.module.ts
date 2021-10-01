import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CategoriesComponent, ProductComponent],
  imports: [SharedModule, CategoriesRoutingModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
