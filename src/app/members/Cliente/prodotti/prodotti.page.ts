import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { TouchSequence } from 'selenium-webdriver'
import {ProdottoService} from './../../../services/prodotto/prodotto.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/interface/NavExtraService';
import { Mezzo } from 'src/app/interface/mezzo';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage implements OnInit{

  shop = '';
  products : Prodotto[] = [];

  prodotto: Prodotto = {
    nome: "",
    prezzo:0,
    quantita:0,
    quantitaCarrello:0,
    mezzo: Mezzo.AUTO,
    id:""
  }
  negozio: String;

  constructor(private prodService: ProdottoService,public navCtrl: NavController, private route: ActivatedRoute, private router: Router, private navExtra: NavExtrasService) { 
    
  }

  
  

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.getProducts(params["prodotti"]);
      this.negozio = params["negozio"];
    });
  }


  

  getProducts(products: [string]){
    if(this.products.length == 0) {
      for(let id of products){
        this.prodService.getProdotto(id).subscribe(res => {

          this.prodotto = res;
          this.prodotto.id = id;
          this.prodotto.quantitaCarrello = 0;
          this.products.push(this.prodotto);
        })
      }
    }
  }

  listElementClicked(prod: Prodotto){
    const navigationExtras: NavigationExtras = {
      queryParams: {
          prodID: prod.id
      }
    };
    this.router.navigate(['/tabsCliente/dettagli'], navigationExtras);
  }

  cartButtonPressed() {
    const data: any[] = [];
    data.push(this.products);
    data.push(this.negozio);
    this.navExtra.setExtras(data);
    this.navCtrl.navigateForward('/tabsCliente/carrello');
  }

  plusButtonPressed(index: number){
    this.products[index].quantitaCarrello = this.products[index].quantitaCarrello + 1;
  }

  getTotalProductsInTheCart() {
    var sum = 0;
    for (let p of this.products) {
      sum = sum + p.quantitaCarrello;
    }
    return sum;
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
