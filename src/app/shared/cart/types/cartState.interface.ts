import { CartProduct } from "./cartProduct.interface";

export interface CartState {
  isLoading: boolean
  products: CartProduct[]
  totalPrice: number
  error: string | null
}
