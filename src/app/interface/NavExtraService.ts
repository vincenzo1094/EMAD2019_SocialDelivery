import { Injectable } from '@angular/core';
import { Ordine } from './ordine';

@Injectable({
  providedIn: 'root'
})
export class NavExtrasService {

    extras: any;
    cliente: string;
    ordine: Ordine;

      constructor() { }

      public setOrdine(ordine) {
        this.ordine = ordine;
      }

      public getOrdine() {
        return this.ordine;
      }

      public setExtras(data){
        this.extras = data;
      }

      public getExtras(){
        return this.extras;
      }

      public setCliente(cliente) {
        this.cliente = cliente;
      }

      public getCliente(){
        return this.cliente;
      }
    }