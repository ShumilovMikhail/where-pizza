import { Ingredient } from "./ingredient.interface"
import { Topping } from "./topping.interface"

export interface Product {
  image: string
  isNew: boolean
  name: string
  price: number
  weight: number
  ingredients: Ingredient[]
  removableIngredients?: Ingredient[]
  toppings?: Topping[]
};
