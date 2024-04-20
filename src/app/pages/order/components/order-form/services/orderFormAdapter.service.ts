import { Injectable } from "@angular/core";
import { Observable, map, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";

import { OrderFormUserInfo } from "../types/orderFormUserInfo.interface";
import { OrderUserInfo } from "../../../types/orderUserInfo.interface";
import { OrderFormDelivery } from "../types/orderFormDelivery.interface";
import { OrderFormDeliveryTypes } from "../types/orderFormDeliveryTypes";
import { OrderDeliveryAddress } from "../../../types/orderDeliveryAddress.interface";
import { OrderDelivery } from "../../../types/orderDelivery.interface";
import { OrderFormPayment } from "../types/orderFormPayment.interface";
import { OrderPaymentChange } from "../../../types/orderPaymentChange.interface";
import { OrderForm } from "../types/orderForm.interface";
import { Order } from "../../../types/order.interface";
import { OrderPayment } from "../../../types/orderPayment.interface";
import { OrderFormPaymentChangeTypes } from "../types/orderFormPaymentChangeTypes";
import { cartProductsSelector, cartTotalPriceSelector } from "../../../../../shared/cart/store/selectors";
import { CartProduct } from "../../../../../shared/types/cartProduct.interface";

const createUserInfo = (userInfoForm: OrderFormUserInfo): OrderUserInfo => {
  return ({
    username: userInfoForm.username,
    phone: userInfoForm.phone,
    ...(userInfoForm.date !== '' ? { date: userInfoForm.date } : {})
  })
}

const createDelivery = (deliveryForm: OrderFormDelivery): OrderDelivery => {
  const isAddress: boolean = deliveryForm.type === OrderFormDeliveryTypes.DELIVERY
  const address: OrderDeliveryAddress = isAddress ? {
    street: deliveryForm.address.street,
    approach: deliveryForm.address.approach,
    house: deliveryForm.address.house,
    ...(deliveryForm.address.floor !== '' ? { floor: deliveryForm.address.floor } : {}),
    ...(deliveryForm.address.flat !== '' ? { flat: deliveryForm.address.flat } : {}),
  } : null;

  return ({
    type: deliveryForm.type,
    ...(isAddress ? { address: address } : {}),
    deliver: deliveryForm.deliver
  });
};

const createPayment = (paymentForm: OrderFormPayment): OrderPayment => {

  const isChange: boolean = Boolean(paymentForm.change)

  const change: OrderPaymentChange = isChange ? {
    type: paymentForm.change.type,
    ...(paymentForm.change.type === OrderFormPaymentChangeTypes.WITH_CHANGE ? { amount: +paymentForm.change.amount } : {})
  } : null

  return ({
    type: paymentForm.type,
    ...(isChange ? { change: change } : {})
  })
}



@Injectable({
  providedIn: 'root'
})
export class OrderFormAdapterService {

  constructor(private store: Store) { };


  public toOrder(orderForm: OrderForm): Observable<Order> {
    return this.store.select(cartProductsSelector).pipe(
      withLatestFrom(this.store.select(cartTotalPriceSelector)),
      map(([cartProducts, cartTotalPrice]: [CartProduct[], number]) => {
        return ({
          userInfo: createUserInfo(orderForm.userInfo),
          delivery: createDelivery(orderForm.delivery),
          payment: createPayment(orderForm.payment),
          products: cartProducts,
          date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()} `,
          ...(orderForm.comment ? { comment: orderForm.comment } : {}),
          totalPrice: cartTotalPrice
        });
      })
    );
  };
};
