import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getProductsAction } from './store/actions/getProducts.action';
import { Observable, filter } from 'rxjs';
import { categoriesSelector } from './store/selectors';
import { getFiltersAction } from './store/actions/getFilters.action';


@Component({
  selector: 'app-feed-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  categories$: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
    this.store.dispatch(getFiltersAction());
    this.categories$ = this.store.select(categoriesSelector).pipe(filter(Boolean));
  };

};
