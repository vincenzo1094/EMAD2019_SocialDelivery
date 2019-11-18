import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./access/login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'tabsCliente', loadChildren: './members/Cliente/tabs/tabs.module#TabsPageModule' },
  { path: 'tabsEsercente', loadChildren: './members/Esercente/tabs/tabs.module#TabsPageModule' },
  { path: 'tabsDriver', loadChildren: './members/Driver/tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './access/register/register.module#RegisterPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
