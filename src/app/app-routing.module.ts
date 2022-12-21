import { Tab1PageModule } from './tab1/tab1.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tabs3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'calabre',
    loadChildren: () => import('./acrescimo/calabre/calabre.module').then( m => m.CalabrePageModule)
  },
  {
    path: 'cogumelo',
    loadChildren: () => import('./acrescimo/cogumelo/cogumelo.module').then( m => m.CogumeloPageModule)
  },
  {
    path: 'pepperoni',
    loadChildren: () => import('./acrescimo/pepperoni/pepperoni.module').then( m => m.PepperoniPageModule)
  },
  {
    path: 'mussarela',
    loadChildren: () => import('./acrescimo/mussarela/mussarela.module').then( m => m.MussarelaPageModule)
  },
  {
    path: 'frango',
    loadChildren: () => import('./acrescimo/frango/frango.module').then( m => m.FrangoPageModule)
  },
  {
    path: 'veganinha',
    loadChildren: () => import('./acrescimo/veganinha/veganinha.module').then( m => m.VeganinhaPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
