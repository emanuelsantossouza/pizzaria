import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalabrePageRoutingModule } from './calabre-routing.module';

import { CalabrePage } from './calabre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalabrePageRoutingModule
  ],
  declarations: [CalabrePage]
})
export class CalabrePageModule {}
