import { Mezzo } from './mezzo';

export interface Prodotto {
    id?: string;
    nome: string;
    immagine?: string;
    descrizione?: string;
    prezzo: number;
    quantita: number;
    quantitaCarrello: number;
    mezzo: Mezzo;
  }