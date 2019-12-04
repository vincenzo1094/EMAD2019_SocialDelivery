import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negozi',
  templateUrl: './negozi.page.html',
  styleUrls: ['./negozi.page.scss'],
})
export class NegoziPage implements OnInit {

  shops = ['Negozio1', 'Negozio2', 'Negozio3', 'Negozio4'];

  constructor() { }

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

}
