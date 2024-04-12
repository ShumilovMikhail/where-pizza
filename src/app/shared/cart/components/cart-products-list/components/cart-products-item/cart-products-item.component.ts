import { Component, Input, OnInit } from '@angular/core';

import { CartProduct } from '../../../../types/cartProducts.interface';
import { CustomProduct } from '../../../../../types/customProduct.interface';

@Component({
  selector: 'app-cart-products-item',
  templateUrl: './cart-products-item.component.html',
  styleUrl: './cart-products-item.component.scss'
})
export class CartProductsItemComponent implements OnInit {
  @Input('cartProduct') cartProduct: CartProduct;
  customProduct: CustomProduct;

  ngOnInit(): void {
    this.customProduct = this.cartProduct.product;
  };
};
