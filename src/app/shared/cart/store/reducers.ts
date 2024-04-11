import { Action, createReducer, on } from "@ngrx/store";
import { CartState } from "../types/cartState.interface";
import { addProductSuccessAction } from "./actions/addProduct.action";
import { CartProduct } from "../types/cartProducts.interface";

const initialState: CartState = {
  products: [],
  totalPrice: 0
}

const cartReducer = createReducer(initialState,
  on(addProductSuccessAction, (state, payload: { cartProducts: CartProduct[] }): CartState => {
    const totalPrice: number = payload.cartProducts.reduce((totalPrice, cartProduct) => totalPrice + cartProduct.totalPrice, 0)
    return (
      {
        ...state,
        products: payload.cartProducts,
        totalPrice
      }
    )
  })
)

export function reducers(state: CartState, action: Action) {
  return cartReducer(state, action);
};
