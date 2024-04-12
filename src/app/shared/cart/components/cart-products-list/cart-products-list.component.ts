import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartProduct } from '../../types/cartProducts.interface';
import { cartProductsSelector } from '../../store/selectors';

@Component({
  selector: 'app-cart-products-list',
  templateUrl: './cart-products-list.component.html',
  styleUrl: './cart-products-list.component.scss'
})
export class CartProductsListComponent implements OnInit {

  cartProducts$: Observable<CartProduct[]>;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.cartProducts$ = this.store.select(cartProductsSelector)
  };
};
