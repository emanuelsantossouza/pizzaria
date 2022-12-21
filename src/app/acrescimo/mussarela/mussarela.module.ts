import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MussarelaPageRoutingModule } from './mussarela-routing.module';

import { MussarelaPage } from './mussarela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MussarelaPageRoutingModule
  ],
  declarations: [MussarelaPage]
})
export class MussarelaPageModule {}
