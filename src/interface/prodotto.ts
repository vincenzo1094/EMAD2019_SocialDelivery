export interface Prodotto {
    id: string;
    nome: string;
    descrizione?: string;
    prezzo: number;
    quantita: number;
    id_mezzo: string;
  }