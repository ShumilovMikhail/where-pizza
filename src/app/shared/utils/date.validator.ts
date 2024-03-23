import { FormControl, ValidatorFn } from "@angular/forms";

export const dateValidator = (): ValidatorFn => {
  return (dateControl: FormControl<string>) => {
    // DD-MM-MMMM
    const dateArray = dateControl.value.split('-');
    const date = new Date();
    date.setFullYear(+dateArray[2], +dateArray[1] - 1, +dateArray[0])
    const yearValidate = date.getFullYear() === +dateArray[2] && date.getFullYear() > 1978 && date.getFullYear() <= new Date().getFullYear();
    const monthValidate = date.getMonth() + 1 === +dateArray[1]
    const dateValidate = date.getDate() === +dateArray[0]
    return Boolean(dateValidate && monthValidate && yearValidate) ? null : { date: true };
  };
};
