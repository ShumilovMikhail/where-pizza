
import { ProductsListType } from "../../../../../../../shared/types/productsList.type";
import { ProductsSettingsType } from "../../../../../../../shared/types/productsSettings.type";
import { FiltersCategory } from "../../../types/filtersCategory.type";

export interface Category {
  name: string
  products: ProductsListType
  settings?: ProductsSettingsType | null
  filters: FiltersCategory
}
