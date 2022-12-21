import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepperoniPage } from './pepperoni.page';

const routes: Routes = [
  {
    path: '',
    component: PepperoniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepperoniPageRoutingModule {}
