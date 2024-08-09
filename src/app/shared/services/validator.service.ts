import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public firstNameAndLastnamePattern: string = '^[a-zA-Z]+( [a-zA-Z]+)+$';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public cantBeUsername(control: AbstractControl): ValidationErrors | null {
    const value = control.value.trim().toLowerCase();
    if (value === 'username') {
      return {cantBeUsername: true};
    }
    return null;
  }

  public isValidField(field: string, form: FormGroup)  {
    return form.controls[field].errors && form.controls[field].touched;
  }
}
