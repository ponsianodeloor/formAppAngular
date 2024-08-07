import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{

  public myForm:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      retype_password: [''],
    });
  }

  isFieldValid(field: string) {
    //TODO: Implementar validacion desde un servicio
    //return !this.myForm.get(field)?.valid && this.myForm.get(field)?.touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const formValue = this.myForm.value;
    console.log(formValue);
  }



}
