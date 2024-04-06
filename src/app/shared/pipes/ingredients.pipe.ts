import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient } from "../types/ingredient.interface";

@Pipe({
  name: "ingredients"
})
export class IngredientsPipe implements PipeTransform {

  transform(ingredients: Ingredient[]) {
    return ingredients.map((ingredient: Ingredient) => ingredient.name).join(', ');
  };
};
