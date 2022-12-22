import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPizzaPageRoutingModule } from './dados-pizza-routing.module';

import { DadosPizzaPage } from './dados-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPizzaPageRoutingModule
  ],
  declarations: [DadosPizzaPage]
})
export class DadosPizzaPageModule {}
