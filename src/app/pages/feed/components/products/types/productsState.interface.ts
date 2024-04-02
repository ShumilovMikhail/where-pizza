import { Products } from "../../../../../shared/types/products.interface"

export interface ProductsState {
  isLoading: boolean
  products: Products | null
  error: string | null
};
