import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComingUpPageRoutingModule } from './coming-up-routing.module';

import { ComingUpPage } from './coming-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComingUpPageRoutingModule
  ],
  declarations: [ComingUpPage]
})
export class ComingUpPageModule {}
