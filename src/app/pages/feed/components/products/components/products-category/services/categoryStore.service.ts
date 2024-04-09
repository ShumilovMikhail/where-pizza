import { Injectable } from "@angular/core";
import { Observable, switchMap, tap, withLatestFrom } from "rxjs";
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

const initialState: CategoryState = {
  name: null,
  products: null,
  settings: null,
  filters: null
}

@Injectable()
export class CategoryStoreService extends ComponentStore<CategoryState> {

  readonly name$: Observable<string> = this.select((state: CategoryState) => state.name);
  readonly productsList$: Observable<ProductsListType> = this.select((state: CategoryState) => state.products);
  readonly settings$: Observable<ProductsSettingsType> = this.select((state: CategoryState) => state.settings);
  readonly filters$: Observable<FiltersCategory> = this.select((state: CategoryState) => state.filters);

  constructor(private store: Store) {
    super(initialState);
  };

  public readonly getCategory = this.effect((category$: Observable<string>) => {
    return category$.pipe(
      switchMap((category: string) => {
        return this.store.select(productsSelector).pipe(
          withLatestFrom(this.store.select(filtersSelector)),
          tap(([products, filters]: [Products, Filters]) => {
            this.setCategory({
              name: products[category].name,
              filters: filters[category],
              settings: products[category].settings,
              products: products[category].products
            });
          })
        );
      }),
    );
  });

  readonly setCategory = this.updater((state: CategoryState, category: Category) => ({
    ...state,
    name: category.name,
    products: category.products,
    settings: category.settings ? category.settings : null,
    filters: category.filters
  }));

};
