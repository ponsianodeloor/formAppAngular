import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormArray} from "@angular/forms";
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)], [this.asyncValidator]],
      favoriteGames: this.fb.array([
        ['metal gear solid', Validators.required],
        ['final fantasy', Validators.required],
        ['dragon quest', Validators.required],
      ]),
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      delay(1000),
      map(value => value === 'invalid' ? { invalidName: true } : null)
    );
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `Este ${field} es requerido.`;
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'invalidName':
          return 'Nombre inválido';
      }
    }

    return null;
  }

  getFieldErrorInArray(field: string, index: number): string | null {
    const control = (this.myForm.get(field) as FormArray).at(index);
    if (!control) return null;

    const errors = control.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `Este ${field} es requerido.`;
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'invalidName':
          return 'Nombre inválido';
      }
    }

    return null;
  }

  isValidFieldInArray(field: string, index: number): boolean | null {
    return this.favoriteGames.controls[index].errors
      && this.favoriteGames.controls[index].touched;
  }

  addFavoriteGame() {
    this.favoriteGames.push(this.fb.control('', Validators.required));
  }

  removeFavoriteGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
