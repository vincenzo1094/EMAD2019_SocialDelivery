import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettagliOrdinePage } from './dettagli-ordine.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliOrdinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettagliOrdinePage]
})
export class DettagliOrdinePageModule {}
