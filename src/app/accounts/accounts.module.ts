import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { NewaccountComponent } from './newaccount/newaccount.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TransComponent } from './trans/trans.component';
import { AddTransComponent } from './add-trans/add-trans.component';
import { EditTransComponent } from './edit-trans/edit-trans.component';

@NgModule({
  declarations: [AccountsComponent, NewaccountComponent, TransComponent, AddTransComponent, EditTransComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
