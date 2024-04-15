import { Component, Input, OnInit } from '@angular/core';

import { CartProduct } from '../../../../../types/cartProduct.interface';
import { CustomProduct } from '../../../../../types/customProduct.interface';
import { Store } from '@ngrx/store';
import { incProductAction } from '../../../../store/actions/incProduct.action';
import { decProductAction } from '../../../../store/actions/decProduct.action';

@Component({
  selector: 'app-cart-products-item',
  templateUrl: './cart-products-item.component.html',
  styleUrl: './cart-products-item.component.scss'
})
export class CartProductsItemComponent implements OnInit {
  @Input('cartProduct') cartProduct: CartProduct;
  customProduct: CustomProduct;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.customProduct = this.cartProduct.product;
  };

  onChangeCount(newCount: number): void {
    const action = newCount > this.cartProduct.count ? incProductAction : decProductAction;
    this.store.dispatch(action({ cartProduct: this.cartProduct }));
  };
};
