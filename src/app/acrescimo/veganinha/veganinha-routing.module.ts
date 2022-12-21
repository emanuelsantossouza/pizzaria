import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeganinhaPage } from './veganinha.page';

const routes: Routes = [
  {
    path: '',
    component: VeganinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeganinhaPageRoutingModule {}
