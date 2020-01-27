import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavExtrasService {

    extras: any;
    cliente: string;

      constructor() { }

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