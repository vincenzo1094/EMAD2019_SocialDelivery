import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { TouchSequence } from 'selenium-webdriver'
import {ProdottoService} from './../../../services/prodotto/prodotto.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage implements OnInit {

  shop = '';
  products : Prodotto[] = [];
  prodotto: Prodotto;
  productsInCart = new Set();

  constructor(private prodService: ProdottoService,public navCtrl: NavController, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.getProducts(params["prodotti"]);
    });
  }

  getProducts(products: [string]){
    for(let id of products){
      this.prodService.getProdotto(id).subscribe(res => {
        this.prodotto = res;
        this.prodotto.id = id;
        this.products.push(this.prodotto);
      })
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
    const navigationExtras: NavigationExtras = {
      queryParams: {
          elements: this.productsInCart
      }
    };
    this.router.navigate(['/tabsCliente/carrello'], navigationExtras);
  }

  plusButtonPressed(prod: Prodotto){
    if(this.productsInCart.has(prod)){
    }
    else{
      this.productsInCart.add(prod);
    }
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
