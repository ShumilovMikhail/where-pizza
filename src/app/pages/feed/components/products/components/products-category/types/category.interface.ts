
import { ProductsCategory } from "../../../../../../../shared/types/productsCategory.interface";
import { FiltersCategory } from "../../../types/filtersCategory.type";

export interface Category {
  products: ProductsCategory
  filters: FiltersCategory
}
