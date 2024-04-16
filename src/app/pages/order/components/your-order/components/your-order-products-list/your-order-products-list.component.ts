import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { YourOrderStoreService } from '../../services/your-order-store.service';
import { CartProduct } from '../../../../../../shared/types/cartProduct.interface';

@Component({
  selector: 'app-your-order-products-list',
  templateUrl: './your-order-products-list.component.html',
  styleUrl: './your-order-products-list.component.scss'
})
export class YourOrderProductsListComponent implements OnInit {

  cartProducts$: Observable<CartProduct[]>;

  constructor(private readonly yourOrderStore: YourOrderStoreService) { };

  ngOnInit(): void {
    this.cartProducts$ = this.yourOrderStore.products$;
  };
};
