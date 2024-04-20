import { UserInfo } from "../../../../../shared/types/userInfo.interface";
import { OrderFormDelivery } from "./orderFormDelivery.interface";
import { OrderFormPayment } from "./orderFormPayment.interface";

export interface OrderForm {
  userInfo: UserInfo
  delivery: OrderFormDelivery
  payment: OrderFormPayment
  comment: string
}
