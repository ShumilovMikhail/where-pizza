import { Injectable } from "@angular/core";
import { Observable, filter, switchMap, tap, withLatestFrom } from "rxjs";
import { ComponentStore } from "@ngrx/component-store";
import { Store } from "@ngrx/store";

import { CategoryState } from "../types/categoryState.interface";
import { ProductsListType } from "../../../../../../../shared/types/productsList.type";
import { filtersSelector, productsSelector } from "../../../store/selectors";
import { Products } from "../../../../../../../shared/types/products.interface";
import { ProductsSettingsType } from "../../../../../../../shared/types/productsSettings.type";
import { Filters } from "../../../types/filters.interface";
import { Category } from "../types/category.interface";
import { FiltersCategory } from "../../../types/filtersCategory.type";
import { FiltersService } from "./filters.service";
import { Filter } from "../../../types/filter.interface";

const initialState: CategoryState = {
  products: null,
  filters: null,
  filtersApply: false
}

@Injectable()
export class CategoryStoreService extends ComponentStore<CategoryState> {

  readonly name$: Observable<string> = this.select((state: CategoryState) => state.products ? state.products.name : null);
  readonly productsList$: Observable<ProductsListType> = this.select((state: CategoryState) => state.products ? state.products.products : null);
  readonly settings$: Observable<ProductsSettingsType> = this.select((state: CategoryState) => state.products ? state.products.settings : null);
  readonly filters$: Observable<FiltersCategory> = this.select((state: CategoryState) => state.filters);
  readonly filtersApply$: Observable<boolean> = this.select((state: CategoryState) => state.filtersApply);

  private categoryName: string;

  constructor(private readonly store: Store, private readonly filtersService: FiltersService) {
    super(initialState);
  };

  public readonly getCategory = this.effect<string>((category$: Observable<string>) => {
    return category$.pipe(
      switchMap((category: string) => {
        this.categoryName = category
        return this.store.select(productsSelector).pipe(
          withLatestFrom(this.store.select(filtersSelector)),
          tap(([products, filters]: [Products, Filters]) => {
            this.setCategoryUpdater({
              filters: filters[category],
              products: products[category]
            });
          })
        );
      }),
    );
  });

  public readonly applyFilters = this.effect<FiltersCategory>((filtersCategory$: Observable<FiltersCategory>) => {
    return filtersCategory$.pipe(
      withLatestFrom(this.productsList$),
      switchMap(([filtersCategory, productsList]: [FiltersCategory, ProductsListType]) => {
        this.updateFiltersUpdater(filtersCategory);
        const filters: Filter[] = filtersCategory.reduce((accumulator, filterGroup) => {
          return [...accumulator, ...filterGroup.filters]
        }, [])
        return this.filtersService.getProductsWithFilters(productsList, filters).pipe(
          tap((productsList: ProductsListType) => {
            this.setProductsListUpdater(productsList)
          })
        );
      }),
    );
  });
  public readonly resetFilters = this.effect<void>((source$) => {
    return source$.pipe(
      switchMap(() => {
        return this.store.select(productsSelector).pipe(
          withLatestFrom(this.store.select(filtersSelector)),
          filter(([products, filters]: [Products, Filters]) => Boolean(products && filters)),
          tap(([products, filters]: [Products, Filters]) => {
            this.resetFiltersUpdater(filters[this.categoryName]);
            this.setProductsListUpdater(products[this.categoryName].products);
          })
        );
      }),
    );
  });

  readonly setCategoryUpdater = this.updater((state: CategoryState, category: Category) => ({
    ...state,
    products: category.products,
    filters: category.filters
  }));

  readonly setProductsListUpdater = this.updater((state: CategoryState, productsList: ProductsListType) => ({
    ...state,
    products: {
      ...state.products,
      products: productsList
    },
    filtersApply: false
  }));

  readonly updateFiltersUpdater = this.updater((state: CategoryState, filtersCategory: FiltersCategory) => ({
    ...state,
    filters: filtersCategory,
    filtersApply: true
  }));


  readonly resetFiltersUpdater = this.updater((state: CategoryState, filtersCategory: FiltersCategory) => ({
    ...state,
    filters: filtersCategory
  }));



};
