import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabsDriver',
    component: TabsPage,
    children: [
      
        {
          path: '',
          redirectTo: 'riepilogo',
          pathMatch: 'full'
      },
      {
        path: 'riepilogo',
       
            loadChildren: () =>
              import('../riepilogo/riepilogo.module').then(m => m.RiepilogoPageModule)
             
          },
      {
        path: 'spedizioni',
        
            
            loadChildren: () =>
              import('../spedizioni/spedizioni.module').then(m => m.SpedizioniPageModule)
             
        
      },
      {
        path: 'impostazioni',
       
            loadChildren: () =>
              import('../impostazioni/impostazioni.module').then(m => m.ImpostazioniPageModule)
              
          }
        ]
      },
      
    ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
