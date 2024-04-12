import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartTotalPriceSelector } from './store/selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  totalPrice$: Observable<number>;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.totalPrice$ = this.store.select(cartTotalPriceSelector);
  };

};
