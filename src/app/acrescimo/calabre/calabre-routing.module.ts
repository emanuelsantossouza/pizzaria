import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalabrePage } from './calabre.page';

const routes: Routes = [
  {
    path: '',
    component: CalabrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalabrePageRoutingModule {}
