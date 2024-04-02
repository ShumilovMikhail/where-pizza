import { Action, createReducer, on } from "@ngrx/store";

import { ProductsState } from "../types/productsState.interface";
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from "./actions/getProducts.action";
import { GetProductsResponse } from "../types/getProductsResponse.interface";

const initialState: ProductsState = {
  isLoading: false,
  products: null,
  error: null
};


const productsReducer = createReducer(initialState,
  on(getProductsAction, (state): ProductsState => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(getProductsSuccessAction, (state, payload: { products: GetProductsResponse }): ProductsState => {
    return ({
      ...state,
      isLoading: false,
      products: payload.products,
      error: null
    })
  }),
  on(getProductsFailureAction, (state): ProductsState => {
    return ({
      ...state,
      isLoading: false,
      error: 'Get products error'
    })
  }),
);


// export function reducers(state: ProductsState, action: Action) {
//   return productsReducer(state, action);
// };

export function reducers(state: ProductsState, action: Action) {
  return productsReducer(state, action);
};

