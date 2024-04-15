import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ProductsCategory } from '../../../../shared/types/productsCategory.interface';
import { productsSelector } from '../../../feed/components/products/store/selectors';
import { Products } from '../../../../shared/types/products.interface';

@Component({
  selector: 'app-add-to-order',
  templateUrl: './add-to-order.component.html',
  styleUrl: './add-to-order.component.scss'
})
export class AddToOrderComponent implements OnInit {

  snacks$: Observable<ProductsCategory>;
  sauces$: Observable<ProductsCategory>;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.snacks$ = this.store.select(productsSelector).pipe(
      map((products: Products) => {
        return products['snacks'];
      })
    );
    this.sauces$ = this.store.select(productsSelector).pipe(
      map((products: Products) => {
        return products['sauces'];
      })
    );
  };
};
