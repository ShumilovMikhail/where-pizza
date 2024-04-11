import { CustomProductSetting } from "./customProductSetting.interface";
import { Ingredient } from "./ingredient.interface";
import { Product } from "./product.interface";
import { Topping } from "./topping.interface";

export class CustomProduct {
  product: Product
  totalPrice: number
  toppings: Topping[]
  removeIngredients: Ingredient[]
  settings: CustomProductSetting[]
}
