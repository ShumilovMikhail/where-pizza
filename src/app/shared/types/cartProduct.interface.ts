import { CustomProduct } from "./customProduct.interface";

export interface CartProduct {
  product: CustomProduct
  id: number
  count: number
  totalPrice: number
}
