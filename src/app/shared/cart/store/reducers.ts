import { Action, createReducer, on } from "@ngrx/store";

import { CartState } from "../types/cartState.interface";
import { addProductSuccessAction } from "./actions/addProduct.action";
import { CartProduct } from "../types/cartProduct.interface";
import { loadProductsFromStorageAction, loadProductsFromStorageFailureAction, loadProductsFromStorageSuccessAction } from "./actions/loadProductsFromStorage.action";

const initialState: CartState = {
  isLoading: false,
  products: [],
  totalPrice: 0,
  error: null
};

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
  }),
  on(loadProductsFromStorageAction, (state) => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(loadProductsFromStorageSuccessAction, (state, payload: { cartProducts: CartProduct[] }): CartState => {
    const totalPrice: number = payload.cartProducts.reduce((totalPrice, cartProduct) => totalPrice + cartProduct.totalPrice, 0)
    return (
      {
        ...state,
        products: payload.cartProducts,
        totalPrice,
        isLoading: false
      }
    )
  }),
  on(loadProductsFromStorageFailureAction, (state) => {
    return ({
      ...state,
      isLoading: false,
      error: 'error load products from storage'
    })
  })
)

export function reducers(state: CartState, action: Action) {
  return cartReducer(state, action);
};
