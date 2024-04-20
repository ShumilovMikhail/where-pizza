import { OrderPaymentChange } from "./orderPaymentChange.interface"

export interface OrderPayment {
  type: string
  change?: OrderPaymentChange
}
