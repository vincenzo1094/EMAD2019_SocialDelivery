import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.page.html',
  styleUrls: ['./ordini.page.scss'],
})
export class OrdiniPage implements OnInit {

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
