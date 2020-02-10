import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from 'src/app/interface/ordine';
import {ClienteService} from 'src/app/services/cliente/cliente.service';
import {NegozioService} from 'src/app/services/negozio/negozio.service';
import {Cliente} from 'src/app/interface/cliente';
import {stato_ordine} from 'src/app/interface/stato_ordine';
import {NavExtrasService} from 'src/app/interface/NavExtraService';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.page.html',
  styleUrls: ['./ordini.page.scss'],
})
export class OrdiniPage implements OnInit {

  ordini: Ordine[] = [];
  clienteID: string = '';

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private clienteService: ClienteService,private navExtra: NavExtrasService,private negService: NegozioService) { }


  listElementClicked(ordine: Ordine) {
    this.navExtra.setOrdine(ordine);
    this.navCtrl.navigateForward('tabsCliente/dettagli-ordine');
  }

  ngOnInit() {
    this.clienteID = this.navExtra.getCliente();
    this.clienteService.getCliente(this.clienteID).subscribe(res => {
      this.ordini = res.ordini;
    })
    
  }


  toValue(key: number): string {
    console.log(key);
    console.log("OK");
    if(key == 0) {
      return 'PARTITO';
    }
    else if(key == 1) {
      return 'CONSEGNATO';
    }

    return 'ATTESA';
  }


  viewOrdini(){
    this.navCtrl.navigateRoot('/tabsCliente/ordini');
  }

  viewImpostazioni(){
    this.navCtrl.navigateRoot('/tabsCliente/impostazioni');
  }

  viewPreferiti(){
    this.navCtrl.navigateRoot('/tabsCliente/preferiti');
  }

  viewNegozi(){
    this.navCtrl.navigateRoot('/tabsCliente/negozi');
  }

}
