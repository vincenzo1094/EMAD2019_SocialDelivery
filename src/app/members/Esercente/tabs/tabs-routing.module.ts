import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ordini',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ordini/ordini.module').then(m => m.OrdiniPageModule)
          }
        ]
      },
      {
        path: 'negozi',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../negozi/negozi.module').then(m => m.NegoziPageModule)
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
        redirectTo: 'tabs/negozi',
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
