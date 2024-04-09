import { Component } from '@angular/core';
import { CategoryStoreService } from '../../services/categoryStore.service';
import { Observable } from 'rxjs';
import { FiltersCategory } from '../../../../types/filtersCategory.type';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.scss'
})
export class ProductsFiltersComponent {

  readonly filters$: Observable<FiltersCategory> = this.categoryStore.filters$;
  isSubmit: boolean = false;

  constructor(private readonly categoryStore: CategoryStoreService) { };

  onApply() {
    this.isSubmit = true;
  };

  onFiltersSubmit(filtersCategory: FiltersCategory): void {
    console.log(filtersCategory);
  };

};
