import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient } from "../types/ingredient.interface";
import { OrderDeliveryAddress } from "../types/orderDeliveryAddress.interface";

@Pipe({
  name: "address"
})
export class AddressPipe implements PipeTransform {

  transform(address: OrderDeliveryAddress) {
    return `ул.${address.street}, дом ${address.house}, подъезд ${address.approach}` + (address.floor ? `, этаж ${address.floor}` : '') + (address.flat ? `, этаж ${address.flat}` : '')
  };
};
