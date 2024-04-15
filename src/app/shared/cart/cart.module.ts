import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartComponent } from './cart.component';

import { reducers } from './store/reducers';
import { AddProductEffect } from './store/effects/addProduct.effect';
import { CartProductsListComponent } from './components/cart-products-list/cart-products-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CartEffect } from './store/effects/cart.effect';
import { LoadProductsFromStorageEffect } from './store/effects/loadProductsFromStorage.effect';
import { ProductCounterModule } from '../product-counter/product-counter.module';
import { IncProductEffect } from './store/effects/incProduct.effect';
import { DecProductEffect } from './store/effects/decProduct.effect';
import { ProductsItemModule } from '../products-item/products-item.module';



@NgModule({
  declarations: [
    CartComponent,
    CartProductsListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([AddProductEffect, CartEffect, LoadProductsFromStorageEffect, IncProductEffect, DecProductEffect]),
    PipesModule,
    ProductCounterModule,
    ProductsItemModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
