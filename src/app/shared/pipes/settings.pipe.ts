import { Pipe, PipeTransform } from "@angular/core";
import { CustomProductSetting } from "../types/customProductSetting.interface";

@Pipe({
  name: "settings"
})
export class SettingsPipe implements PipeTransform {

  transform(settings: CustomProductSetting[]) {
    return settings.map((setting: CustomProductSetting) => `${setting.name}: ${setting.value}`).join(', ');
  };
};
