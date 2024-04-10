import { ProductsCategory } from "../../../../../../../shared/types/productsCategory.interface"
import { FiltersCategory } from "../../../types/filtersCategory.type"

export interface CategoryState {
  products: ProductsCategory
  filters: FiltersCategory
  filtersApply: boolean
};
