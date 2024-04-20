import { OrderDeliverCollection } from "./orderDeliverCollection.interface"

export interface OrderDeliver {
  type: string
  collection?: OrderDeliverCollection
}
