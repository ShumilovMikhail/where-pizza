import { FormGroup, ValidatorFn } from "@angular/forms";

import { CollectionTimeForm } from "../types/collectionTimeForm.interface";

export const collectionTimeValidator = (): ValidatorFn => {
  return (collectionTimeForm: FormGroup<CollectionTimeForm>) => {
    // DD.MM.MMMM
    const dateArray = collectionTimeForm.get('date').value.split('.');
    // HH:MM
    const timeArray = collectionTimeForm.get('time').value.split(':');
    const date = new Date();
    date.setFullYear(+dateArray[2], +dateArray[1] - 1, +dateArray[0])
    date.setHours(+timeArray[0]);
    date.setMinutes(+timeArray[1]);
    const yearValidate = date.getFullYear() === +dateArray[2] && date.getFullYear() > 1978 && date.getFullYear() <= new Date().getFullYear();
    const monthValidate = date.getMonth() + 1 === +dateArray[1] && date.getMonth() >= new Date().getMonth();
    const dateValidate = date.getDate() === +dateArray[0] && (date.getMonth() === new Date().getMonth() ? date.getDate() >= new Date().getDate() : true);
    const isThisDay = date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate();
    const hoursValidate = date.getHours() === +timeArray[0] && (isThisDay ? date.getHours() >= new Date().getHours() : true);
    const timeValidate = date.getMinutes() === +timeArray[1] && (isThisDay && date.getHours() === new Date().getHours() ? date.getMinutes() >= new Date().getMinutes() : true);
    return Boolean(dateValidate && monthValidate && yearValidate && hoursValidate && timeValidate) ? null : { collection: true };
  };
};
