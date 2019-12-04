import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { TouchSequence } from 'selenium-webdriver'
import {ProdottoService} from './../../../services/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage implements OnInit {

  shop = '';
  products : Prodotto[] = [];
  prodotto: Prodotto;

  provaProdotto = ["568dWqrGvo8tFsOWrsE2","FcZs4QIShaABKZnKemJP","ZBkXgbom9lp57z1Kv4FL","oTedl9qwETAvy2ItMj7H"];

  constructor(prodService: ProdottoService) { 
    this.getProducts(prodService);
  }

  ngOnInit() {
  }

  getProducts(prodService: ProdottoService){
    for(let id of this.provaProdotto){
      prodService.getProdotto(id).subscribe(res => {
        this.prodotto = res;
        this.products.push(this.prodotto);
      })
    }
  }

  listElementClicked(){
    
  }

  

}
