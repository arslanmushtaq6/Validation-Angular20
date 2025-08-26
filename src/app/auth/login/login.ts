import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  submit(){
    console.log('Submitted');
  }

  selectedOption: string = '';
  otherText: string = '';

  // otherOption(){

  // }

}
