import { Component } from '@angular/core';
import { ProductsCategoryStoreService } from '../../services/productsCategoryStore.service';
import { Observable } from 'rxjs';
import { ProductsListType } from '../../../../../../../../shared/types/productsList.type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  readonly productList$: Observable<ProductsListType> = this.productsCategoryStore.productsList$;

  constructor(private readonly productsCategoryStore: ProductsCategoryStoreService) { };
};
