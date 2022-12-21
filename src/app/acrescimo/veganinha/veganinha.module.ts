import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeganinhaPageRoutingModule } from './veganinha-routing.module';

import { VeganinhaPage } from './veganinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeganinhaPageRoutingModule
  ],
  declarations: [VeganinhaPage]
})
export class VeganinhaPageModule {}
