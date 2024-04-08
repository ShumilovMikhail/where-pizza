import { Component, Input, OnInit } from '@angular/core';
import { ProductsCategoryStoreService } from './services/productsCategoryStore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss',
  providers: [ProductsCategoryStoreService]
})
export class ProductsCategoryComponent implements OnInit {

  @Input('category') category: string;
  readonly categoryName$: Observable<string> = this.productsCategoryStore.name$;
  filtersModalOpen: boolean = false;

  constructor(private readonly productsCategoryStore: ProductsCategoryStoreService) { };

  ngOnInit(): void {
    this.productsCategoryStore.getCategory(this.category);
  };

  onFiltersModalOpen(): void {
    this.filtersModalOpen = true;
  };

  onFiltersModalClose(): void {
    this.filtersModalOpen = false;
  };

};
