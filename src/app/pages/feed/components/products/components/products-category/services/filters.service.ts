import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ProductsListType } from "../../../../../../../shared/types/productsList.type";
import { Filter } from "../../../types/filter.interface";
import { FiltersTypes } from "../types/filtersTypes";
import { Product } from "../../../../../../../shared/types/product.interface";

const filtersFunctions = {
  'Новинка': (products: ProductsListType) => products.filter((product: Product) => product.isNew),
  'C креветкой': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'Креветка')),
  'С сыром': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'Сыр')),
  'Чай': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'чай')),
  'С молоком': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'молоко')),
  'С базиликом': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'базилик')),
  'С лососем': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'лосось')),
  'С огурцом': (products: ProductsListType) => products.filter((product: Product) => product.ingredients?.find((ingredient) => ingredient.name === 'огурец')),
}

@Injectable({ providedIn: 'root' })
export class FiltersService {

  public getProductsWithFilters(productsList: ProductsListType, filters: Filter[]): Observable<ProductsListType> {
    let productsWithFilters: ProductsListType = productsList;
    filters.forEach((filter: Filter) => {
      if (!filter.isActivate) {
        return;
      };
      const filterName = filter.filter as FiltersTypes;
      productsWithFilters = filtersFunctions[filterName](productsWithFilters);
    });
    return of(productsWithFilters);
  };
};
