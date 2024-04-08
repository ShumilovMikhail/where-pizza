import { Products } from "../../../../../shared/types/products.interface"
import { Filters } from "./filters.interface"

export interface ProductsState {
  isLoading: boolean
  products: Products | null
  filters: Filters | null
  error: string | null
};
