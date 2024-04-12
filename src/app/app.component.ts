import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { autoLoginAction } from './shared/auth/store/actions/auto-login.action';
import { loadProductsFromStorageAction } from './shared/cart/store/actions/loadProductsFromStorage.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.dispatch(autoLoginAction());
    this.store.dispatch(loadProductsFromStorageAction());
  };
};
