import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddProductEffect } from './store/effects/addProduct.effect';
import { CartProductsListComponent } from './components/cart-products-list/cart-products-list.component';
import { CartProductsItemComponent } from './components/cart-products-list/components/cart-products-item/cart-products-item.component';
import { PipesModule } from '../pipes/pipes.module';
import { CartEffect } from './store/effects/cart.effect';
import { LoadProductsFromStorageEffect } from './store/effects/loadProductsFromStorage.effect';



@NgModule({
  declarations: [
    CartComponent,
    CartProductsListComponent,
    CartProductsItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([AddProductEffect, CartEffect, LoadProductsFromStorageEffect]),
    PipesModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
