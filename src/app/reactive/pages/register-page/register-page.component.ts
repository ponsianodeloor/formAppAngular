import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {firstNameAndLastnamePattern, emailPattern, cantBeUsername} from "../../../shared/validators/validators";
import {ValidatorService} from "../../../shared/services/validator.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{

  public myForm:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) { }

  /*ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      //TODO: Implementar validacion sincrona
      username: ['', [Validators.required, cantBeUsername]],
      password: ['', Validators.required, Validators.minLength(6)],
      retype_password: [''],
    });
  }*/

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
      username: ['', [Validators.required, this.validatorService.cantBeUsername]],
      password: ['', Validators.required, Validators.minLength(6)],
      retype_password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  isFieldValid(field: string) {
    //TODO: Implementar validacion desde un servicio
    //return !this.myForm.get(field)?.valid && this.myForm.get(field)?.touched;
    return this.validatorService.isValidField(field, this.myForm);
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
