import { ProductsListType } from "../../../../../../../shared/types/productsList.type"
import { ProductsSettingsType } from "../../../../../../../shared/types/productsSettings.type"

export interface ProductsCategoryState {
  name: string | null
  products: ProductsListType | null
  settings?: ProductsSettingsType | null
};
