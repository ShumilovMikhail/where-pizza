import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryStoreService } from '../../services/categoryStore.service';
import { Observable } from 'rxjs';
import { FiltersCategory } from '../../../../types/filtersCategory.type';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.scss'
})
export class ProductsFiltersComponent {
};
