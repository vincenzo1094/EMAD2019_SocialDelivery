import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
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
