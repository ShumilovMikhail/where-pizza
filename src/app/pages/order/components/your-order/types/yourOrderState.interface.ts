import { CartProduct } from "../../../../../shared/types/cartProduct.interface";

export interface YourOrderState {
  products: CartProduct[],
  totalPrice: number
}
