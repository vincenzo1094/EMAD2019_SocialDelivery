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

  viewNegozi(){
    this.navCtrl.navigateRoot('/tabsCliente/negozi');
  }

  viewImpostazioni(){
    this.navCtrl.navigateRoot('/tabsCliente/impostazioni');
  }

  viewPreferiti(){
    this.navCtrl.navigateRoot('/tabsCliente/preferiti');
  }

}
