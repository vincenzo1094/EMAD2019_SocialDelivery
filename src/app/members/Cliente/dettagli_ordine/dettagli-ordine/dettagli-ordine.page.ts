import { Component, OnInit } from '@angular/core';
import {NavExtrasService} from 'src/app/interface/NavExtraService';
import { Ordine } from 'src/app/interface/ordine';
import { stato_ordine } from 'src/app/interface/stato_ordine';
import { Prodotto } from 'src/app/interface/prodotto';
import {ProdottoService} from 'src/app/services/prodotto/prodotto.service';
import {NegozioService} from 'src/app/services/negozio/negozio.service';

@Component({
  selector: 'app-dettagli-ordine',
  templateUrl: './dettagli-ordine.page.html',
  styleUrls: ['./dettagli-ordine.page.scss'],
})
export class DettagliOrdinePage implements OnInit {

  ordine: Ordine = {
    stato: stato_ordine.ATTESA,
    id_negozio: "",
    id_cliente:""
  };
  nomeNegozio = ""
  prodotti: Prodotto[] = [];

  constructor(private navExtra: NavExtrasService,
    private prodService : ProdottoService,
    private negService: NegozioService) { }

  ngOnInit() {
    this.ordine = this.navExtra.getOrdine();
    this.negService.getNegozio(this.ordine.id_negozio).subscribe(res =>{
      this.nomeNegozio = res.nome;
    });
    for(let prod of this.ordine.prodotti) {
      this.prodService.getProdotto(prod.id).subscribe(res =>{
        res.quantitaCarrello = prod.quantita;
        this.prodotti.push(res);
      });
    }
  }

}
