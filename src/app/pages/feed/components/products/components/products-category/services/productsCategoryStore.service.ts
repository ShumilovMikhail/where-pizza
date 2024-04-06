import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { ComponentStore } from "@ngrx/component-store";
import { Store } from "@ngrx/store";

import { ProductsCategoryState } from "../types/productsCategoryState.interface";
import { ProductsListType } from "../../../../../../../shared/types/productsList.type";
import { productsSelector } from "../../../store/selectors";
import { Products } from "../../../../../../../shared/types/products.interface";
import { ProductsCategory } from "../../../../../../../shared/types/productsCategory.interface";
import { ProductsSettingsType } from "../../../../../../../shared/types/productsSettings.type";

const initialState: ProductsCategoryState = {
  name: null,
  products: null,
  settings: null
}

@Injectable()
export class ProductsCategoryStoreService extends ComponentStore<ProductsCategoryState> {

  readonly name$: Observable<string> = this.select((state: ProductsCategoryState) => state.name);
  readonly productsList$: Observable<ProductsListType> = this.select((state: ProductsCategoryState) => state.products);
  readonly settings$: Observable<ProductsSettingsType> = this.select((state: ProductsCategoryState) => state.settings);

  constructor(private store: Store) {
    super(initialState);
  };

  public readonly getCategory = this.effect((category$: Observable<string>) => {
    return category$.pipe(
      switchMap((category: string) => {
        return this.store.select(productsSelector).pipe(
          tap((products: Products) => {
            this.setCategory(products[category]);
          })
        );
      })
    );
  });

  readonly setCategory = this.updater((state: ProductsCategoryState, productsCategory: ProductsCategory) => ({
    name: productsCategory.name,
    products: productsCategory.products,
    settings: productsCategory.settings ? productsCategory.settings : null
  }));

};
