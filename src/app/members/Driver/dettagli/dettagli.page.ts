import { Component, OnInit } from '@angular/core';
import {NavExtrasService} from 'src/app/interface/NavExtraService';
import { Ordine } from 'src/app/interface/ordine';
import { stato_ordine } from 'src/app/interface/stato_ordine';
import { Prodotto } from 'src/app/interface/prodotto';
import {ProdottoService} from 'src/app/services/prodotto/prodotto.service';
import {NegozioService} from 'src/app/services/negozio/negozio.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { Negozio } from 'src/app/interface/negozio';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.page.html',

})
export class DettagliPage implements OnInit {

 


  constructor(private navExtra: NavExtrasService, 
    private route:ActivatedRoute,
    private clienteService : ClienteService,
    private negozioService: NegozioService) { }

    cliente:Cliente;
    id_cliente: string ='';
    negozio:Negozio;
    id_negozio:string='';

  ngOnInit() {


    this.route.queryParams.subscribe(async params => {
        this.id_cliente = params['idCliente'];
        this.id_negozio=params['idNegozio']
        this.clienteService.getCliente(this.id_cliente).subscribe(res=>{
          this.cliente=res;
        });
        this.negozioService.getNegozio(this.id_negozio).subscribe(element=>{
          this.negozio=element;
        });
     });
  }
}
