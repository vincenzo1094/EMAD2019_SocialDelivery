import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/interface/prodotto';
import { ActivatedRoute } from '@angular/router';
import {ProdottoService} from './../../../services/prodotto/prodotto.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.page.html',
  styleUrls: ['./dettagli.page.scss'],
})
export class DettagliPage implements OnInit {

  constructor(private route: ActivatedRoute,private prodService: ProdottoService) {
    
   }

  prodotto: Prodotto = {
    id:null,
    nome:null,
    descrizione:null,
    prezzo:null,
    quantita:null,
    quantitaCarrello: null,
    mezzo:null};

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const id = params['prodID'];
      this.prodService.getProdotto(id).subscribe(res => {
        this.prodotto = res;
        this.prodotto.id = id;
      })
    });
  }

  editButtonPressed(){
    this.goToAddProductForm();
  }

  private async goToAddProductForm() {
  
  }


}
