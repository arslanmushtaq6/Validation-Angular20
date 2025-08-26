import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-singup',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './singup.html',
  styleUrl: './singup.css'
})
export class Singup {

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const group = control as FormGroup;
  const password = group.get('password')?.value;
  const confirmpassword = group.get('confirmpassword')?.value;

  return password && confirmpassword && password === confirmpassword ? null : { passwordMisMatch: true };
}


  addFormGroup = new FormGroup ({
    username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required ,Validators.email] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required ,Validators.minLength(8)] }),
    confirmpassword: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }),
  },
  {validators: this.passwordMatchValidator} //custom validator
)

  loggedIn() {
    if(this.addFormGroup.valid){
    console.log("Form Valid:",this.addFormGroup.value);
    this.addFormGroup.reset();
    }
    else
    {
      console.log("Form Invalid");
      this.addFormGroup.markAllAsTouched();
    }

    
  }
}
