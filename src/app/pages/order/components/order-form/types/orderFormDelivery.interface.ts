import { OrderFormDeliveryAddress } from "./orderFormDeliveryAddress.interface";
import { OrderFormDeliveryTypes } from "./orderFormDeliveryTypes";

export interface OrderFormDelivery {
  type: OrderFormDeliveryTypes,
  address: OrderFormDeliveryAddress
}
