import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartTotalPriceSelector } from '../../../../shared/cart/store/selectors';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {

  totalPrice$: Observable<number>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.totalPrice$ = this.store.select(cartTotalPriceSelector);
  };

};
