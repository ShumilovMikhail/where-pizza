import { OrderFormPaymentChange } from "./orderFormPaymentChange.interface";
import { OrderFormPaymentTypes } from "./orderFormPaymentTypes";

export interface OrderFormPayment {
  type: OrderFormPaymentTypes
  change: OrderFormPaymentChange
}
