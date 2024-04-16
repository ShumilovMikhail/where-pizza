import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { ProductsCategory } from '../../../../shared/types/productsCategory.interface';
import { productsSelector } from '../../../feed/components/products/store/selectors';
import { Products } from '../../../../shared/types/products.interface';
import { getProductsAction } from '../../../feed/components/products/store/actions/getProducts.action';

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
    this.store.dispatch(getProductsAction());
    this.snacks$ = this.store.select(productsSelector).pipe(
      filter(Boolean),
      map((products: Products) => {
        return products['snacks'];
      })
    );
    this.sauces$ = this.store.select(productsSelector).pipe(
      filter(Boolean),
      map((products: Products) => {
        return products['sauces'];
      })
    );
  };
};
