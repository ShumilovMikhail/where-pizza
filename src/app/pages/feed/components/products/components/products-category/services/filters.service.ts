import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ProductsListType } from "../../../../../../../shared/types/productsList.type";
import { Filter } from "../../../types/filter.interface";
import { FiltersTypes } from "../types/filtersTypes";
import { Product } from "../../../../../../../shared/types/product.interface";

const filtersFunctions = {
  'Новинка': (products: ProductsListType) => products.filter((product: Product) => product.isNew)
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
