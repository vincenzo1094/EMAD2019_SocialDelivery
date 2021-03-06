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
  { path: 'tabsCliente/preferiti', loadChildren: './members/Cliente/preferiti/preferiti.module#PreferitiPageModule' },
  { path: 'tabsCliente/impostazioni', loadChildren: './members/Cliente/impostazioni/impostazioni.module#ImpostazioniPageModule' },
  { path: 'tabsCliente/negozi', loadChildren: './members/Cliente/negozi/negozi.module#NegoziPageModule' },
  { path: 'tabsCliente/ordini', loadChildren: './members/Cliente/ordini/ordini.module#OrdiniPageModule' },
  { path: 'tabsDriver/impostazioni', loadChildren: './members/Driver/impostazioni/impostazioni.module#ImpostazioniPageModule' },
  { path: 'tabsDriver/spedizioni', loadChildren: './members/Driver/spedizioni/spedizioni.module#SpedizioniPageModule' },
  { path: 'tabsDriver/riepilogo', loadChildren: './members/Driver/riepilogo/riepilogo.module#RiepilogoPageModule' },
  { path: 'tabsDriver/dettagli', loadChildren: './members/Driver/dettagli/dettagli.module#DettagliPageModule' },
  { path: 'tabsEsercente/ordini', loadChildren: './members/Esercente/ordini/ordini.module#OrdiniPageModule' },
  { path: 'tabsEsercente/negozi', loadChildren: './members/Esercente/negozi/negozi.module#NegoziPageModule' },
  { path: 'tabsEsercente/impostazioni', loadChildren: './members/Esercente/impostazioni/impostazioni.module#ImpostazioniPageModule' },
  { path: 'tabsCliente/prodotti', loadChildren: './members/Cliente/prodotti/prodotti.module#ProdottiPageModule' },
  { path: 'tabsCliente/dettagli', loadChildren: './members/Cliente/dettagli/dettagli.module#DettagliPageModule' },
  { path: 'tabsCliente/carrello', loadChildren: './members/Cliente/carrello/carrello.module#CarrelloPageModule' },
  { path: 'tabsCliente/dettagli-ordine', loadChildren: './members/Cliente/dettagli_ordine/dettagli-ordine/dettagli-ordine.module#DettagliOrdinePageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
