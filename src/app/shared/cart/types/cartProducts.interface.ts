import { CustomProduct } from "../../types/customProduct.interface";

export interface CartProduct {
  product: CustomProduct
  id: number
  count: number
  totalPrice: number
}
