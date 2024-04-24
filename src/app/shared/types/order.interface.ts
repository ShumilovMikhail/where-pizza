import { CartProduct } from "./cartProduct.interface";
import { OrderDelivery } from "./orderDelivery.interface";
import { OrderPayment } from "./orderPayment.interface";
import { OrderUserInfo } from "./orderUserInfo.interface";

export interface Order {
  userInfo: OrderUserInfo
  delivery: OrderDelivery
  payment: OrderPayment
  products: CartProduct[]
  comment?: string
  date: string,
  totalPrice: number
}
