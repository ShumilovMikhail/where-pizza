import { NgModule } from "@angular/core";
import { IngredientsPipe } from "./ingredients.pipe";
import { SettingsPipe } from "./settings.pipe";

@NgModule({
  declarations: [IngredientsPipe, SettingsPipe],
  exports: [IngredientsPipe, SettingsPipe]
})
export class PipesModule { }
