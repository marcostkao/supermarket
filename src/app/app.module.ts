import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CategoriesService } from './categories/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartService } from './product-detail/shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [CategoriesService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
