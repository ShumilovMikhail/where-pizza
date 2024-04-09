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
import { FiltersService } from "./filters.service";
import { Filter } from "../../../types/filter.interface";

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

  public readonly setFilters = this.effect<FiltersCategory>((filtersCategory$: Observable<FiltersCategory>) => {
    return filtersCategory$.pipe(
      withLatestFrom(this.productsList$),
      switchMap(([filtersCategory, productsList]: [FiltersCategory, ProductsListType]) => {
        this.updateFilters(filtersCategory)
        const filters: Filter[] = filtersCategory.reduce((accumulator, filterGroup) => {
          return [...accumulator, ...filterGroup.filters]
        }, [])
        return this.filtersService.getProductsWithFilters(productsList, filters).pipe(
          tap((productsList: ProductsListType) => {
            this.setProducts(productsList)
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
          tap(([products, filters]: [Products, Filters]) => {
            this.setProducts(products[this.categoryName].products);
            this.setFilters(filters[this.categoryName])
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

  readonly setProducts = this.updater((state: CategoryState, productsList: ProductsListType) => ({
    ...state,
    products: productsList,
  }));


  readonly updateFilters = this.updater((state: CategoryState, filtersCategory: FiltersCategory) => ({
    ...state,
    filters: filtersCategory,
  }));


};
