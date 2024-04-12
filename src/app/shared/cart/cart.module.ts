import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartComponent } from './cart.component';

import { reducers } from './store/reducers';
import { AddProductEffect } from './store/effects/addProduct.effect';
import { CartProductsListComponent } from './components/cart-products-list/cart-products-list.component';
import { CartProductsItemComponent } from './components/cart-products-list/components/cart-products-item/cart-products-item.component';
import { PipesModule } from '../pipes/pipes.module';
import { CartEffect } from './store/effects/cart.effect';
import { LoadProductsFromStorageEffect } from './store/effects/loadProductsFromStorage.effect';
import { ProductCounterModule } from '../product-counter/product-counter.module';
import { IncProductEffect } from './store/effects/incProduct.effect';
import { DecProductEffect } from './store/effects/decProduct.effect';



@NgModule({
  declarations: [
    CartComponent,
    CartProductsListComponent,
    CartProductsItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([AddProductEffect, CartEffect, LoadProductsFromStorageEffect, IncProductEffect, DecProductEffect]),
    PipesModule,
    ProductCounterModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
