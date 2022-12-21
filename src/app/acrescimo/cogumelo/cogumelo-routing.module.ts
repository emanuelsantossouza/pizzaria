import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CogumeloPage } from './cogumelo.page';

const routes: Routes = [
  {
    path: '',
    component: CogumeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CogumeloPageRoutingModule {}
