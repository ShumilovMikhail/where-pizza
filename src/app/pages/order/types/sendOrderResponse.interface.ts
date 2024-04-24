import { Order } from "../../../shared/types/order.interface";

export interface SendOrderResponse extends Order {
  orderNumber: number
}
