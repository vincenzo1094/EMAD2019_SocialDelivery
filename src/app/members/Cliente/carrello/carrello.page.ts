import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/interface/prodotto';
import { NavExtrasService } from 'src/app/interface/NavExtraService';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Ordine} from 'src/app/interface/ordine';
import {stato_ordine} from 'src/app/interface/stato_ordine';
import { ProdottoOrdine } from 'src/app/interface/prodotto_ordine';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';
import {Cliente} from 'src/app/interface/cliente';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.page.html',
  styleUrls: ['./carrello.page.scss'],
})
export class CarrelloPage implements OnInit {

  productsInCart : Prodotto[] = [];
  totalProducts : Prodotto[] = [];
  idCliente: string = "";
  idNegozio: string;
  prodotto: Prodotto = {
    id:null,
    nome:null,
    descrizione:null,
    prezzo:null,
    quantita:null,
    quantitaCarrello: null,
    mezzo:null};
    
    cliente: Cliente = {
      };

  constructor(private route: ActivatedRoute,
    private navExtra: NavExtrasService,
    private nav: NavController,
    public alertController: AlertController,
    private clientService: ClienteService,
    private ordService: OrdineService,
    private prodService: ProdottoService) { }

  ngOnInit() {
    this.totalProducts = this.navExtra.getExtras()[0];
    this.idNegozio = this.navExtra.getExtras()[1];
    this.productsInCart = this.totalProducts.filter(item => item.quantitaCarrello > 0);
    this.idCliente = this.navExtra.getCliente();
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
    var prods: ProdottoOrdine[] = [];
    for(let p of this.productsInCart) {
      this.prodService.updateQuantita(p.id,p.quantita - p.quantitaCarrello);
      var ord : ProdottoOrdine = {
        id: p.id,
        quantita: p.quantitaCarrello
      }
      prods.push(ord);
    }
    var newOrder: Ordine = {
      stato: stato_ordine.ATTESA,
      id_negozio: this.idNegozio,
      id_cliente: this.idCliente,
      prodotti: prods,
      totale:this.getTotale()}; 

    var client = this.cliente;
    var service = this.clientService;
    var id = this.idCliente;
    this.ordService.addOrdine(newOrder).then(function(elem){
      newOrder.id = elem.id;
      if(client.ordini == null) {
        client.ordini = [newOrder]
      }
      else {
        client.ordini.push(newOrder);
      }
      console.log(client.ordini);
      
      service.updateOrdini(id,client.ordini);
      
    });

    this.presentAlert("Complimenti","Pagamento effettuato con successo");
  }


  async presentAlert(header:string, message:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: '',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  } 

}
