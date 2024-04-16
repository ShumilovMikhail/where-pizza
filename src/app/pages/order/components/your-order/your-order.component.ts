import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { YourOrderStoreService } from './services/your-order-store.service';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrl: './your-order.component.scss'
})
export class YourOrderComponent implements OnInit {

  totalPrice$: Observable<number>;

  constructor(private readonly yourOrderStore: YourOrderStoreService) { }

  ngOnInit(): void {
    this.yourOrderStore.getCart();
    this.totalPrice$ = this.yourOrderStore.totalPrice$;
  };

};
