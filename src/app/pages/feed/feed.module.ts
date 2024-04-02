import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { reducers } from './components/products/store/reducers';
import { GetProductsEffect } from './components/products/store/effects/getProducts.effect';



@NgModule({
  declarations: [
    FeedComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([GetProductsEffect])
  ],
})
export class FeedModule { }
