import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepperoniPageRoutingModule } from './pepperoni-routing.module';

import { PepperoniPage } from './pepperoni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepperoniPageRoutingModule
  ],
  declarations: [PepperoniPage]
})
export class PepperoniPageModule {}
