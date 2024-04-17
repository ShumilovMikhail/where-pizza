import { Injectable } from "@angular/core";
import { Product } from "../../types/product.interface";
import { ProductForm } from "../types/productForm.interface";
import { CustomProduct } from "../../types/customProduct.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductFormAdapterService {

  public toCustomProduct(product: Product, form: ProductForm): CustomProduct {
    return {
      product: product,
      totalPrice: form.totalPrice,
      toppings: (form.toppings as Array<boolean>).reduce((accumulator, isChecked, index) => {
        return isChecked ? [...accumulator, product.toppings[index]] : accumulator;
      }, []),
      removeIngredients: (form.removeIngredients as Array<boolean>).reduce((accumulator, isChecked, index) => {
        return isChecked ? [...accumulator, product.removableIngredients[index]] : accumulator;
      }, []),
      settings: form.settings,
    }
  };
};
