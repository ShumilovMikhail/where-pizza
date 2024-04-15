import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsItemComponent } from './products-item.component';
import { ProductCounterModule } from '../product-counter/product-counter.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [ProductsItemComponent],
  imports: [
    CommonModule,
    ProductCounterModule,
    PipesModule
  ],
  exports: [ProductsItemComponent]
})
export class ProductsItemModule { }
