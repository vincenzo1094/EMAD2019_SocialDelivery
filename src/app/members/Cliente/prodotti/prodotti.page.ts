import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage implements OnInit {

  shop = '';
  products : Prodotto[] = [];

  constructor() { 
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts(){
    //INSERIRE LA CHIAMATA ALLA CLASSE CHE SCARICA I DATI DAL DB
    //RIEMPIO L'ARRAY CON DATI STATICI
    let numbers = [1,2,3,4,5];
    for(let i of numbers){
      let product = {
        id: "22",
        nome: "Prodotto",
        prezzo: 3.99,
        quantita: 10,
        id_mezzo: "40",
      };
      this.products.push(product);
    }

  }

  listElementClicked(){
    
  }

  

}
