import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CartProduct } from '../types/cartProduct.interface';
import { CustomProduct } from '../types/customProduct.interface';
import { incProductAction } from '../cart/store/actions/incProduct.action';
import { decProductAction } from '../cart/store/actions/decProduct.action';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.scss'
})
export class ProductsItemComponent implements OnInit {
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
