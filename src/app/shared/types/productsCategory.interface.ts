import { ProductsListType } from "./productsList.type"
import { ProductsSettingsType } from "./productsSettings.type"

export interface ProductsCategory {
  name: string
  id: number
  products: ProductsListType
  settings?: ProductsSettingsType
};
