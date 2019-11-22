import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'preferiti',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../preferiti/preferiti.module').then(m => m.PreferitiPageModule)
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
