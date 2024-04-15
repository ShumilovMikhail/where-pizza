import { Component, Input } from '@angular/core';

import { ProductsCategory } from '../types/productsCategory.interface';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss'
})
export class ProductsCarouselComponent {

  @Input('productsCategory') productsCategory: ProductsCategory;

}
