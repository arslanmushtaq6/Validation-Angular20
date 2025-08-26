import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

/* Reative Form Module: Form Group, Form Control, formControlName chalta hai.
FormGroup: ye aik container hai, jo multiple form control ko eik group mai rakhta hai.
form = new FormGroup({
name: new FormControl(''),
email: new FormControl('')
})

FormControl: Ye eik single input field ka data aur state handle karta hai (value, touched, valid etc).
har input field ka apna FormControl hota hai.
name = new FormControl('');

FormBuilder: ye shortcut hai FormGroup aur FormControl bananay ka.
isme ap zyada clean aur short code likh skte ho.
constructor(private fb: FormBuilder) {}

form = this.fb.group({
name: [''],
email: ['']
})


*/

@Component({
  selector: 'app-addbooks',
  imports: [ReactiveFormsModule],
  templateUrl: './addbooks.html',
  styleUrl: './addbooks.css'
})
export class Addbooks {

  // addBooksForm: FormGroup;

  // constructor(private fb: FormBuilder) {

  //   this.addBooksForm = this.fb.group({
  //     Language: [''],
  //     Availability: [''],
  //     Condition: [''],
  //     Quantity: [''],
  //     Category: [''],
  //     SelectedOptions: [''],
  //     OtherCategory: ['']
  //   });
  // }

  addBooksForm = new FormGroup({
    Language: new FormControl(),
    Availability: new FormControl(),
    Condition: new FormControl(),
    Quantity: new FormControl(),
    Category: new FormControl(),
    SelectedOptions: new FormControl(),
    OtherCategory: new FormControl(),
  })

  submittedData: any = null;

  displayValue() {
    this.submittedData = this.addBooksForm.value;
    this.addBooksForm.reset();
  }
}
