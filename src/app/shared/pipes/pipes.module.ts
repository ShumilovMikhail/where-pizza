import { NgModule } from "@angular/core";
import { IngredientsPipe } from "./ingredients.pipe";

@NgModule({
  declarations: [IngredientsPipe],
  exports: [IngredientsPipe]
})
export class PipesModule { }
