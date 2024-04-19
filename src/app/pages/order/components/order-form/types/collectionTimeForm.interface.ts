import { AbstractControl } from "@angular/forms";

export interface CollectionTimeForm {
  date: AbstractControl<string>,
  time: AbstractControl<string>,
}
