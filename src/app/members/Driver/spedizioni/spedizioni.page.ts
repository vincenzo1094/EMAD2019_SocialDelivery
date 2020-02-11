import { Component, OnInit, Pipe } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {OrdineService} from '../../../services/ordine/ordine.service';
import {NegozioService} from '../../../services/negozio/negozio.service';
import {Ordine} from '../../../interface/ordine';
import { Observable } from 'rxjs';
import { Negozio } from 'src/app/interface/negozio';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';



@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.page.html',
  styleUrls: ['./spedizioni.page.scss'],
})
export class SpedizioniPage implements OnInit {
  Object = Object;
  public ordine: Ordine[];
  public negozio: Negozio[];
    info={

    id_c:null,
    id_n:null

  }

  

  constructor(public navCtrl: NavController, 
              public actionSheetController: ActionSheetController,
              public ordineService: OrdineService,
              public negozioService: NegozioService,
              public clienteService: ClienteService,
              private route:Router) { }




  ngOnInit() {
   this.ordineService.getOrdiniAttesa().subscribe(res => {
    this.ordine = res;
    this.ordine.forEach(element=>{
      this.negozioService.getNegozio(element.id_negozio).subscribe(r => {

          this.info.id_c=element.id_cliente;
          this.info.id_n=r.nome;
          console.log(this.info);
         

      })
    })
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
          this.clienteService.updateStato(ordine.id_cliente,ordine.id,0);
          this.ordineService.updateStato(0,ordine.id);
          console.log('Share clicked');
        }
      }, {
        text: 'Rifiuta',
        icon: 'close-circle-outline',
        handler: () => {
          this.clienteService.updateStato(ordine.id_cliente,ordine.id,1);
          this.ordineService.updateStato(1,ordine.id);
          console.log('Play clicked');
        }
      }, {
        text: 'Dettagli',
        icon: 'information-circle-outline',
        handler: () => {
          console.log('Favorite clicked');
          const navigationExtras: NavigationExtras = {
            queryParams: {
      
              idCliente:ordine.id_cliente,
              idNegozio:ordine.id_negozio
              }
          };
          this.route.navigate(['/tabsDriver/dettagli'], navigationExtras);
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
