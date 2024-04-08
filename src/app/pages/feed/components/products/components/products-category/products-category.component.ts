import { Component, Input, OnInit } from '@angular/core';
import { CategoryStoreService } from './services/categoryStore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss',
  providers: [CategoryStoreService]
})
export class ProductsCategoryComponent implements OnInit {

  @Input('category') category: string;
  readonly categoryName$: Observable<string> = this.categoryStore.name$;
  filtersModalOpen: boolean = false;

  constructor(private readonly categoryStore: CategoryStoreService) { };

  ngOnInit(): void {
    this.categoryStore.getCategory(this.category);
  };

  onFiltersModalOpen(): void {
    this.filtersModalOpen = true;
  };

  onFiltersModalClose(): void {
    this.filtersModalOpen = false;
  };

};
