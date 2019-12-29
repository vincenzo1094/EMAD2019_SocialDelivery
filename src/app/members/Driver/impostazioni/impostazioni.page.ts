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
