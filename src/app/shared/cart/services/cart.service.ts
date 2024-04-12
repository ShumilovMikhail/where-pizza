import { Injectable } from "@angular/core";
import { CustomProduct } from "../../types/customProduct.interface";
import { CartProduct } from "../types/cartProduct.interface";
import { UtilsService } from "../../utils/utils.service";
import { count } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private readonly utilsService: UtilsService) { };

  public addProduct(product: CustomProduct, cartProducts: CartProduct[]): CartProduct[] {
    const products: CartProduct[] = [...cartProducts];
    const index: number = products.findIndex((customProduct) => this.utilsService.deepEqual(customProduct.product, product));
    const newId = products.length <= 1 ? products.length : products[products.length].id - 1;
    const cartProduct: CartProduct = {
      product,
      id: index !== -1 ? products[index].id : newId,
      count: index !== -1 ? products[index].count + 1 : 1,
      totalPrice: index !== -1 ? products[index].totalPrice + product.totalPrice : product.totalPrice
    };
    return index !== -1 ? [...cartProducts.slice(0, index), cartProduct, ...cartProducts.slice(index + 1)] : [...products, cartProduct]
  };

  public incProduct(cartProduct: CartProduct, cartProducts: CartProduct[]): CartProduct[] {
    return cartProducts.map((cp): CartProduct => {
      return {
        ...cp,
        count: cp.id === cartProduct.id ? cp.count + 1 : cp.count,
        totalPrice: cp.id === cartProduct.id ? cp.totalPrice + cp.product.totalPrice : cp.totalPrice
      }
    });
  };

  public decProduct(cartProduct: CartProduct, cartProducts: CartProduct[]): CartProduct[] {
    if (cartProduct.count - 1 > 0) {
      return cartProducts.map((cp) => (cp.id === cartProduct.id ? {
        ...cp,
        count: cp.count - 1,
        totalPrice: cp.totalPrice - cp.product.totalPrice
      } : cp));
    };
    return cartProducts.filter((cp) => cp.id !== cartProduct.id);
  };
};
