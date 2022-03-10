import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedExpensesPageRoutingModule } from './completed-expenses-routing.module';

import { CompletedExpensesPage } from './completed-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedExpensesPageRoutingModule
  ],
  declarations: [CompletedExpensesPage]
})
export class CompletedExpensesPageModule {}
