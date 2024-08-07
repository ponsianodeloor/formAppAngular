import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {

  public person = {
    gender: 'F',
    notifications: true
  }
  public myForm:FormGroup = new FormGroup({});


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      notifications: [true, Validators.required],
      terms: [false, Validators.required],
    });
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const formValue = this.myForm.value;
    // this.person= formValue
    const {terms, ...newPerson} = formValue;
    this.person = newPerson;
    console.log(formValue);
  }

}
