import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CategoryStoreService } from './services/category-store.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss',
  providers: [CategoryStoreService]
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {

  @Input('category') category: string;
  readonly categoryName$: Observable<string> = this.categoryStore.name$;
  filtersModalOpen: boolean = false;
  filtersApplySubscribe: Subscription;

  constructor(private readonly categoryStore: CategoryStoreService) { };

  ngOnInit(): void {
    this.categoryStore.getCategory(this.category);
    this.initializeListeners()
  };

  onFiltersModalOpen(): void {
    this.filtersModalOpen = true;
  };

  onFiltersModalClose(): void {
    this.filtersModalOpen = false;
  };

  private initializeListeners(): void {
    this.filtersApplySubscribe = this.categoryStore.filtersApply$.subscribe((filtersApply) => {
      this.onFiltersModalClose();
    });
  };

  ngOnDestroy(): void {
    this.filtersApplySubscribe.unsubscribe();
  };

};
