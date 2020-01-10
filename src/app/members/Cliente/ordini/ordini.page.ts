import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Ordine } from 'src/app/interface/ordine';
import {ClienteService} from 'src/app/services/cliente/cliente.service';
import {Cliente} from 'src/app/interface/cliente';
import {stato_ordine} from 'src/app/interface/stato_ordine';


@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.page.html',
  styleUrls: ['./ordini.page.scss'],
})
export class OrdiniPage implements OnInit {

  ordini: Ordine[] = [];
  clienteID: string = 'mOWkoHADMpG8F4uIY07Z';

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private clienteService: ClienteService) { }


  listElementClicked(ordine: Ordine) {

  }

  ngOnInit() {
    this.clienteService.getCliente(this.clienteID).subscribe(res => {
      this.ordini = res.ordini;
    })
    
  }


  toValue(key: number): string {
    console.log("OK");
    if(key == 0) {
      return 'PARTITO';
    }
    else if(key == 1) {
      return 'CONSEGNATO';
    }

    return 'ATTESA';
  }

  getNegozioName(idNegozio: string) {
    
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
