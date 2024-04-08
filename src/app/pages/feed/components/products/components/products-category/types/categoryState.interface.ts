import { ProductsListType } from "../../../../../../../shared/types/productsList.type"
import { ProductsSettingsType } from "../../../../../../../shared/types/productsSettings.type"
import { FiltersCategory } from "../../../types/filtersCategory.type"

export interface CategoryState {
  name: string | null
  products: ProductsListType | null
  settings?: ProductsSettingsType | null
  filters: FiltersCategory
};
