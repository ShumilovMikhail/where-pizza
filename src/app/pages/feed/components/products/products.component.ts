import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getProductsAction } from './store/actions/getProducts.action';

@Component({
  selector: 'app-feed-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction())
  }

}
