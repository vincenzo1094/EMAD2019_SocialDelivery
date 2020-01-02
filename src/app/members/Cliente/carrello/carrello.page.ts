import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/interface/prodotto';
import { NavExtrasService } from 'src/app/interface/NavExtraService';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.page.html',
  styleUrls: ['./carrello.page.scss'],
})
export class CarrelloPage implements OnInit {

  productsInCart : Prodotto[] = [];
  totalProducts : Prodotto[] = [];
  prodotto: Prodotto = {
    id:null,
    nome:null,
    descrizione:null,
    prezzo:null,
    quantita:null,
    quantitaCarrello: null,
    mezzo:null};

  constructor(private route: ActivatedRoute,private navExtra: NavExtrasService,private nav: NavController,public alertController: AlertController) { }

  ngOnInit() {
    this.totalProducts = this.navExtra.getExtras();
    this.productsInCart = this.totalProducts.filter(item => item.quantitaCarrello > 0);
  }

  getTotale() {
    var total = 0;
    for(let p of this.productsInCart) {
      total = total + p.prezzo * p.quantitaCarrello;
    }

    return total;
  }

  removeButtonPressed(index: number) {
    const prod : Prodotto = this.productsInCart[index];
    const i = this.totalProducts.findIndex(elem => elem.nome === prod.nome);
    this.totalProducts[i].quantitaCarrello = 0; 
    if(index > -1){
      this.productsInCart.splice(index,1);
    }
  }

  pagaPressed() {
    this.presentAlert();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Complimenti',
      subHeader: '',
      message: 'Pagamento effettuato con successo',
      buttons: ['OK']
    });

    await alert.present();
  }


  

  

}
