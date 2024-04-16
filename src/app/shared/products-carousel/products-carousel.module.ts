import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsCarouselComponent } from './products-carousel.component';
import { ProductsSlideComponent } from './components/products-slide/products-slide.component';


@NgModule({
  declarations: [
    ProductsCarouselComponent,
    ProductsSlideComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ProductsCarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsCarouselModule { }
