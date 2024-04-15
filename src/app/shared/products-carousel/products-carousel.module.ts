import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from './products-carousel.component';



@NgModule({
  declarations: [
    ProductsCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductsCarouselComponent]
})
export class ProductsCarouselModule { }
