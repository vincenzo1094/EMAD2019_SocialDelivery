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
    

  }

  listElementClicked(){
    
  }

  

}
