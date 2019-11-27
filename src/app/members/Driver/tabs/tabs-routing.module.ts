import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'riepilogo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../riepilogo/riepilogo.module').then(m => m.RiepilogoPageModule)
          }
        ]
      },
      {
        path: 'spedizioni',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../spedizioni/spedizioni.module').then(m => m.SpedizioniPageModule)
          }
        ]
      },
      {
        path: 'impostazioni',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../impostazioni/impostazioni.module').then(m => m.ImpostazioniPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
