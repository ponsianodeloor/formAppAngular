import {AbstractControl, ValidationErrors} from "@angular/forms";

export const cantBeUsername = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value.trim().toLowerCase();
  if (value === 'username') {
    return {cantBeUsername: true};
  }
  return null;
}
