import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator = (): ValidatorFn => {
  return (group: FormGroup) => {
    return (!group.dirty || !group.touched) || group.get('pass').value === group.get('confirm_password').value ? null : { password: true }
  }
};
