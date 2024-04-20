import { OrderFormPaymentChangeTypes } from "./orderFormPaymentChangeTypes";

export interface OrderFormPaymentChange {
  type: OrderFormPaymentChangeTypes
  amount?: string
}
