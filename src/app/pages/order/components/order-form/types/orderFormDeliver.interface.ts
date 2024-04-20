import { OrderFormDeliverCollection } from "./orderFormDeliverCollection.interface";
import { OrderFormDeliverTypes } from "./orderFormDeliverTypes";

export interface OrderFormDeliver {
  type: OrderFormDeliverTypes
  collection?: OrderFormDeliverCollection
}
