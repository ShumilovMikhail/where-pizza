export enum ActionTypes {
  ADD_PRODUCT = '[cart] Add product',
  ADD_PRODUCT_SUCCESS = '[cart] Add product success',
  ADD_PRODUCT_FAILURE = '[cart] Add product failure',

  INC_PRODUCT = '[cart] Increment product',
  INC_PRODUCT_SUCCESS = '[cart] Increment Product success',
  INC_PRODUCT_FAILURE = '[cart] Increment product failure',

  DEC_PRODUCT = '[cart] Decrement product',
  DEC_PRODUCT_SUCCESS = '[cart] Decrement product success',
  DEC_PRODUCT_FAILURE = '[cart] Decrement product failure',

  LOAD_PRODUCTS_FROM_STORAGE = '[cart] Load products from storage',
  LOAD_PRODUCTS_FROM_STORAGE_SUCCESS = '[cart] Load products from storage success',
  LOAD_PRODUCTS_FROM_STORAGE_FAILURE = '[cart] Load products from storage failure',

  RESET_CART = '[cart] reset'
};
