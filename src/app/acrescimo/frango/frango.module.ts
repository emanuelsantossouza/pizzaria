import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrangoPageRoutingModule } from './frango-routing.module';

import { FrangoPage } from './frango.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrangoPageRoutingModule
  ],
  declarations: [FrangoPage]
})
export class FrangoPageModule {}
