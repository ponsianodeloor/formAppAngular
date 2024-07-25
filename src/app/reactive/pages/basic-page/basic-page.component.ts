import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [''],
      price: [0],
      stock: [0]
    });
  }

  onSave(): void {
    console.log(this.myForm.value);
  }

}
