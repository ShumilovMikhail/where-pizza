import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../../../../../../../../../shared/types/product.interface';
import { ProductsSettingsType } from '../../../../../../../../../../shared/types/productsSettings.type';
import { ProductsCategoryStoreService } from '../../../../services/productsCategoryStore.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: Product;
  modalOpen: boolean = false;
  categorySettings: Observable<ProductsSettingsType | null>;

  constructor(private readonly productsCategoryStore: ProductsCategoryStoreService) { };

  ngOnInit(): void {
    this.categorySettings = this.productsCategoryStore.settings$;
  };

  onModalOpen(): void {
    this.modalOpen = true;
  };

  onModalClose(): void {
    this.modalOpen = false;
  };

};
