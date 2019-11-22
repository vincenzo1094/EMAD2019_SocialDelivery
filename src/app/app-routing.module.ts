import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'login', loadChildren: './access/login/login.module#LoginPageModule'},
  { path: 'tabsCliente', loadChildren: './members/Cliente/tabs/tabs.module#TabsPageModule' },
  { path: 'tabsEsercente', loadChildren: './members/Esercente/tabs/tabs.module#TabsPageModule' },
  { path: 'tabsDriver', loadChildren: './members/Driver/tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './access/register/register.module#RegisterPageModule' },
<<<<<<< HEAD
  { path: 'preferiti', loadChildren: './members/Cliente/preferiti/preferiti.module#PreferitiPageModule' },
  { path: 'impostazioni', loadChildren: './members/Cliente/impostazioni/impostazioni.module#ImpostazioniPageModule' },
  { path: 'negozi', loadChildren: './members/Cliente/negozi/negozi.module#NegoziPageModule' },
  { path: 'ordini', loadChildren: './members/Cliente/ordini/ordini.module#OrdiniPageModule' },
  { path: 'impostazioni', loadChildren: './members/Driver/impostazioni/impostazioni.module#ImpostazioniPageModule' },
  { path: 'spedizioni', loadChildren: './members/Driver/spedizioni/spedizioni.module#SpedizioniPageModule' },
  { path: 'riepilogo', loadChildren: './members/Driver/riepilogo/riepilogo.module#RiepilogoPageModule' },
  { path: 'ordini', loadChildren: './members/Esercente/ordini/ordini.module#OrdiniPageModule' },
  { path: 'negozi', loadChildren: './members/Esercente/negozi/negozi.module#NegoziPageModule' },
  { path: 'impostazioni', loadChildren: './members/Esercente/impostazioni/impostazioni.module#ImpostazioniPageModule' },



=======
  { path: 'environment', loadChildren: './environments/environment/environment.module#EnvironmentPageModule' },
>>>>>>> 181ea94f714ddeb5d74d590d0563811a03e1da48
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
