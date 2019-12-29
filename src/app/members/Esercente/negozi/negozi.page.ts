import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-negozi',
  templateUrl: './negozi.page.html',
  styleUrls: ['./negozi.page.scss'],
})
export class NegoziPage implements OnInit {

  shops = ['Negozio1', 'Negozio2', 'Negozio3', 'Negozio4'];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  listElementClicked(shop:string){
    this.goToShopWindow(shop);
  }

  plusButtonPressed(){
    this.goToAddShopForm();
  }

  private async goToAddShopForm(){
    
  }

  private goToShopWindow(shop:string){
    
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
