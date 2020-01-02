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
    this.navCtrl.navigateRoot('/tabsEsercente/ordini');
  }

  viewNegozi(){
    this.navCtrl.navigateRoot('/tabsEsercente/negozi');
  }

  viewImpostazioni(){
    this.navCtrl.navigateRoot('/tabsEsercente/impostazioni');
  }
}
