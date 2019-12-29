import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.page.html',
  styleUrls: ['./riepilogo.page.scss'],
})
export class RiepilogoPage implements OnInit {

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
