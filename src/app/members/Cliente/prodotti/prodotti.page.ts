import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { TouchSequence } from 'selenium-webdriver'
import {ProdottoService} from './../../../services/prodotto/prodotto.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage implements OnInit {

  shop = '';
  products : Prodotto[] = [];
  prodotto: Prodotto;

  constructor(private prodService: ProdottoService,public navCtrl: NavController, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.getProducts(params["prodotti"]);
    });
  }

  getProducts(products: [string]){
    for(let id of products){
      console.log(id);
      this.prodService.getProdotto(id).subscribe(res => {
        this.prodotto = res;
        this.products.push(this.prodotto);
      })
    }
  }

  listElementClicked(){
    
  }

  

}
