import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrangoPage } from './frango.page';

const routes: Routes = [
  {
    path: '',
    component: FrangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrangoPageRoutingModule {}
