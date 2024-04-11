import { CartProduct } from "./cartProducts.interface";

export interface CartState {
  products: CartProduct[]
  totalPrice: number
}
