import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product.interface';
import { ProductsSettingsType } from '../../../types/productsSettings.type';
import { Store } from '@ngrx/store';
import { addProductAction } from '../../../cart/store/actions/addProduct.action';
import { CartProduct } from '../../../types/cartProduct.interface';
import { CustomProduct } from '../../../types/customProduct.interface';

@Component({
  selector: 'app-products-slide',
  templateUrl: './products-slide.component.html',
  styleUrl: './products-slide.component.scss'
})
export class ProductsSlideComponent {
  @Input('product') product: Product;
  @Input('settings') settings: ProductsSettingsType;

  constructor(private readonly store: Store) { };

  onAddToCart() {
    const customProduct: CustomProduct = {
      product: this.product,
      totalPrice: this.product.price,
      toppings: [],
      removeIngredients: [],
      settings: []
    };
    this.store.dispatch(addProductAction({ customProduct }));
  };
};
