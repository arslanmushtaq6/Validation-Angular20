import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacts } from './contacts/contacts';
import { Accounts } from './accounts/accounts';



@NgModule({
  declarations: [
    Contacts,
    Accounts
  ],
  imports: [
    CommonModule
  ]
})
export class FeatuerModule { }
