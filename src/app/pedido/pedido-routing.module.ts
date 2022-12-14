import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoPage } from './pedido.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoPageRoutingModule {}
