import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCounterComponent } from './product-counter.component';



@NgModule({
  declarations: [
    ProductCounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductCounterComponent]
})
export class ProductCounterModule { }
