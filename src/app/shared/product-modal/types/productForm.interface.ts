import { CustomProductSetting } from "../../types/customProductSetting.interface"

export interface ProductForm {
  removeIngredients: boolean[]
  settings: CustomProductSetting[]
  toppings: boolean[]
  totalPrice: number
};
