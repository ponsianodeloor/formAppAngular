import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {firstNameAndLastnamePattern, emailPattern, cantBeUsername} from "../../../shared/validators/validators";
import {ValidatorService} from "../../../shared/services/validator.service";
import {EmailValidatorService} from "../../../shared/services/validators/email-validator.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{

  public myForm:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    //private emailValidatorService: EmailValidatorService este servicio no se usa en caso de usar new EmailValidator()
    private emailValidatorService: EmailValidatorService
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
    this.myForm = this.fb.nonNullable.group({
      name: [
        '',
        [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]
      ],
      /*email: [
        '',
        [Validators.required, Validators.pattern(this.validatorService.emailPattern)],
        [new EmailValidator()]
      ],*/
      email: [
        '',
        [Validators.required, Validators.pattern(this.validatorService.emailPattern)],
        [this.emailValidatorService.validate.bind(this.emailValidatorService)]
      ],
      username: [
        '',
        [Validators.required, this.validatorService.cantBeUsername]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
      retype_password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
    }, {
      validators:
        [this.validatorService.isTheSamePassword('password', 'retype_password')]
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
