import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {OrdineService} from '../../../services/ordine/ordine.service';
import {Ordine} from '../../../interface/ordine';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.page.html',
  styleUrls: ['./spedizioni.page.scss'],
})
export class SpedizioniPage implements OnInit {

  public ordine: Ordine[];
  

  constructor(public navCtrl: NavController, 
              public actionSheetController: ActionSheetController,
              public ordineService: OrdineService,
              public clienteService: ClienteService,
             ) { }
  
  ngOnInit() {
   this.ordineService.getOrdiniAttesa().subscribe(res => {
    this.ordine = res;
   });
  }

  async presentActionSheet(ordine: Ordine) {
    console.log(ordine);
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Accetta',
        icon: 'checkmark-circle-outline',
        handler: () => {
          console.log(ordine.id);
          this.clienteService.updateStato(ordine.id_cliente,ordine.id,3);
          this.ordineService.updateStato(3,ordine.id);
          console.log('Share clicked');
        }
      }, {
        text: 'Rifiuta',
        icon: 'close-circle-outline',
        handler: () => {
          this.clienteService.updateStato(ordine.id_cliente,ordine.id,4);
          this.ordineService.updateStato(4,ordine.id);
          console.log('Play clicked');
        }
      }, {
        text: 'Dettagli',
        icon: 'information-circle-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  viewSpedizioni(){
    this.navCtrl.navigateRoot('/tabsDriver/spedizioni');
  }

  viewRiepilogo(){
    this.navCtrl.navigateRoot('/tabsDriver/riepilogo');
  }

  viewImpostazioni(){
    this.navCtrl.navigateRoot('/tabsDriver/impostazioni');
  }

}
