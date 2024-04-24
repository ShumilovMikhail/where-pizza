import { OrderDeliver } from "./orderDeliver.interface"
import { OrderDeliveryAddress } from "./orderDeliveryAddress.interface"

export interface OrderDelivery {
  type: string
  address?: OrderDeliveryAddress
  deliver: OrderDeliver
};
