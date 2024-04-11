import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddProductEffect } from './store/effects/addProduct.effect';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([AddProductEffect])
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
