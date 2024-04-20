import { OrderFormDeliver } from "./orderFormDeliver.interface";
import { OrderFormDeliveryAddress } from "./orderFormDeliveryAddress.interface";
import { OrderFormDeliveryTypes } from "./orderFormDeliveryTypes";

export interface OrderFormDelivery {
  type: OrderFormDeliveryTypes
  address?: OrderFormDeliveryAddress
  deliver: OrderFormDeliver
}
