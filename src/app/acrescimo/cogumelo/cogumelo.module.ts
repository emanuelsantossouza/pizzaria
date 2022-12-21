import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CogumeloPageRoutingModule } from './cogumelo-routing.module';

import { CogumeloPage } from './cogumelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CogumeloPageRoutingModule
  ],
  declarations: [CogumeloPage]
})
export class CogumeloPageModule {}
