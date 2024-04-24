import { NgModule } from "@angular/core";
import { IngredientsPipe } from "./ingredients.pipe";
import { SettingsPipe } from "./settings.pipe";
import { AddressPipe } from "./address.pipe";

@NgModule({
  declarations: [IngredientsPipe, SettingsPipe, AddressPipe],
  exports: [IngredientsPipe, SettingsPipe, AddressPipe]
})
export class PipesModule { }
