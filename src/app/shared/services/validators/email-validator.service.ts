import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor() { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);

    /*return of({
      email: true
    }).pipe(
      delay(2000)
    );*/

    return of(email).pipe(
      delay(2000),
      map(value => {
        // Replace this with your actual email validation logic
        const emailExists = value === 'test@example.com';
        return emailExists ? { emailTaken: true } : null;
      })
    );
  }

  registerOnValidatorChange(fn: () => void) {
    throw new Error('Method not implemented.');
  }

}
